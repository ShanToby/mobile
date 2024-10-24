import { Alert, Image, ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constant";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import { ReactNativeModal } from "react-native-modal";
import { fetchAPI } from "@/lib/fetch";
import { StyleSheet } from "react-native";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({
        ...verification,
        state: "pending",
      });
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });
      if (completeSignUp.status === "complete") {
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          }),
        });
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({
          ...verification,
          state: "success",
        });
      } else {
        setVerification({
          ...verification,
          error: "Verification failed. Please try again.",
          state: "failed",
        });
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed",
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.signUpCar} style={styles.image} />
          <Text style={styles.titleText}>Create Your Account</Text>
        </View>
        <View style={styles.formContainer}>
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            style={styles.button} // Replaced className with style
          />
          <OAuth />
          <Link
            href="/sign-in"
            style={styles.link}
          >
            Already have an account?{" "}
            <Text style={styles.linkText}>Log In</Text>
          </Link>
        </View>
        <ReactNativeModal
          isVisible={verification.state === "pending"}
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
            }
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Verification</Text>
            <Text style={styles.modalText}>
              We've sent a verification code to {form.email}.
            </Text>
            <InputField
              label={"Code"}
              icon={icons.lock}
              placeholder={"12345"}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.error && (
              <Text style={styles.errorText}>
                {verification.error}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              style={styles.verifyButton}
            />
          </View>
        </ReactNativeModal>
        <ReactNativeModal isVisible={showSuccessModal}>
          <View style={styles.modalContainer}>
            <Image source={images.check} style={styles.successImage} />
            <Text style={styles.successTitle}>Verified</Text>
            <Text style={styles.successText}>
              You have successfully verified your account.
            </Text>

            <CustomButton
              title="Browse Home"
              onPress={() => {
                setShowSuccessModal(false);
                router.push(`/(root)/(tabs)/home`);
              }}
              style={styles.button} // Replaced className with style
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flexContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: 250,
  },
  titleText: {
    fontSize: 24,
    color: "black",
    fontFamily: "JakartaSemiBold",
    position: "absolute",
    bottom: 5,
    left: 5,
  },
  formContainer: {
    padding: 20,
  },
  button: {
    marginTop: 24,
  },
  link: {
    textAlign: "center",
    marginTop: 40,
  },
  linkText: {
    color: "#0286FF", // Adjust to your primary color
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 28,
    borderRadius: 16,
    minHeight: 300,
  },
  modalTitle: {
    fontFamily: "JakartaExtraBold",
    fontSize: 24,
    marginBottom: 8,
  },
  modalText: {
    fontFamily: "Jakarta",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: "#4CAF50", // Change this to your success color
  },
  successImage: {
    width: 110,
    height: 110,
    marginVertical: 20,
    alignSelf: "center",
  },
  successTitle: {
    fontSize: 30,
    fontFamily: "JakartaBold",
    textAlign: "center",
  },
  successText: {
    fontSize: 16,
    color: "gray",
    fontFamily: "Jakarta",
    textAlign: "center",
    marginTop: 8,
  },
});

export default SignUp;
