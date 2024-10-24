import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const Section1 = () => {
  return (
    <View style={styles.sectionWrapper}>
      <ImageBackground
        source={require('../assets/images/TRUCK.avif')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle} 
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>* Welcome to Truck Rentals</Text>
            <Text style={styles.subtitle}>Reliable Truck & Van Rentals for</Text>
            <Text style={styles.subtitle}>Your Moving Needs!</Text>
            <Text style={styles.description}>
              Affordable rates, flexible rental options, and top-quality vehicles to get the job done.
            </Text>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonSectionTitle}>What are you looking for?</Text>
            
                {/* Van button */}
                <TouchableOpacity style={styles.optionButton}>
                  <Image 
                    source={require('../assets/images/deliveryvan.png')} 
                    style={styles.iconImage} 
                  /> 
                  <Text style={styles.buttonText}>Van</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                  <Image 
                    source={require('../assets/images/deliverytruck.png')} 
                    style={styles.iconImage} 
                  /> 
                  <Text style={styles.buttonText}>Truck</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    paddingHorizontal: 10, 
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 150, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, 
    overflow: 'hidden', 
  },
  imageStyle: {
    borderRadius: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, 
    paddingBottom: 5,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 5, 
  },
  title: {
    fontSize: 4, 
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 2, 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17, 
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 5, 
    color: '#ddd',
    marginVertical: 2, 
    textAlign: 'center',
  },
 
  buttonSectionTitle: {
    fontSize: 5, 
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2, 
    textAlign: 'center',
    top: -15,
    left: 85,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    width: '30%',
    height: 50,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5, 
    marginTop: 5, 
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 5, 
    borderRadius: 5,
    width: 60, 
    height: 25, 
    marginHorizontal: 1,
    borderWidth: 1,
    borderColor: '#000',
    right: 7,
    top: 5,
  },
  iconImage: {
    width: 15,
    height: 15, 
    marginBottom: 1,
    bottom: 2,
  },
  buttonText: {
    fontSize: 5, 
    color: '#000',
    fontWeight: 'bold',
    bottom: 4,
  },
});

export default Section1;
