import { Image, View, Text, StyleSheet } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constant";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};

  return (
    <View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider} />
      </View>

      <CustomButton
        title="Log In with Google"
        style={styles.button}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={styles.icon}
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    gap: 12, // You may need to adjust this manually; gap is not supported in RN
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#D3D3D3", // Use your general-100 color
  },
  dividerText: {
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    width: "100%",
    shadowOpacity: 0, // Equivalent to shadow-none
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});

export default OAuth;
