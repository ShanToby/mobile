import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const bookingImage = require('../assets/images/booking.png'); 
const convenientImage = require('../assets/images/convenient.png'); 
const arrowImage = require('../assets/images/arrow.png');

const Section2: React.FC = () => {
  return (
    <View style={styles.sectionWrapper}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/images/mansection2.jpeg')} 
            style={styles.oblongPortraitImage} 
          />
        </View>
        <Text style={styles.message}>
          * Over 2,000 verified vehicles available for reliable rental options
        </Text>
      </View>
      <Image 
        source={require('../assets/images/vehiclesection2.jpeg')} 
        style={styles.oblongPortraitImage2} 
      />

      <View style={styles.rightContainer}>
        <Text style={styles.aboutTitle}>* About Truck Rentals</Text>
        <Text style={styles.subtitle}>Your Trusted Partner for</Text>
        <Text style={styles.subtitle}>Reliable, Affordable Truck &</Text>
        <Text style={styles.subtitle}>Van Rentals</Text>
        <Text style={styles.description}>We take pride in offering top-quality vehicles and exceptional customer service for all</Text>
        <Text style={styles.description}>your transport needs. Our mission is to provide flexible rental solutions that fit your</Text>
        <Text style={styles.description}>schedule and budget.</Text>

        <View style={styles.functionalitySection}>
          <View style={styles.functionalityItem}>
            <Image source={bookingImage} style={styles.functionalityImage} />
            <View style={styles.functionalityTextContainer}>
              <Text style={styles.functionalityTitle}>Easy Booking Process</Text>
              <Text style={styles.functionalityDescription}>Our streamlined booking process you can reserve a truck or van</Text>
              <Text style={styles.functionalityDescription}>quickly and effortlessly. With just a few clicks, you'll be ready to hit the road</Text>
              <Text style={styles.functionalityDescription}>in no time.</Text>
              <View style={styles.line} />
            </View>
          </View>

          <View style={styles.functionalityItem}>
            <Image source={convenientImage} style={styles.functionalityImage} />
            <View style={styles.functionalityTextContainer}>
              <Text style={styles.functionalityTitle}>Convenient Pick-Up & Return Process</Text>
              <Text style={styles.functionalityDescription}>Enjoy a flexible pick-up and return process for hassle-free rentals. Select</Text>
              <Text style={styles.functionalityDescription}>the location and time that best fits your schedule</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.bookButton}>
  <Text style={styles.buttonText}>Book a Rental</Text>
  <Image source={arrowImage} style={styles.arrowImage} />
</TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    height: 200,
    marginBottom: 20,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    left: 30,
    top: -10,
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  oblongPortraitImage: {
    width: 90,
    height: 110, 
    borderRadius: 42,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  oblongPortraitImage2: {
    width: 65,
    height: 90, 
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    top: 70,  
    right: 37,  
  },
  message: {
    fontSize: 5,
    textAlign: 'center',
    color: '#fff', 
    backgroundColor: '#007BFF', 
    padding: 5,
    width: 52, 
    top: -15,
    right: 15,
    borderRadius: 5,
    overflow: 'hidden', 
  },

  rightContainer: {
    flex: 1, 
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5, 
    paddingTop: 5,
    paddingBottom: 5, 
    backgroundColor: '#fff',
    borderRadius: 5, 
    marginLeft: 10,
    right: 40,
    top: 10,
  },

  aboutTitle: {
    fontSize: 4,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 2, 
  },
  description: {
    fontSize: 4,
    color: '#666',
    marginBottom: 2,
  },
  functionalitySection: {
    marginBottom: 10,
    top: 10,
  },
  functionalityItem: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start', 
  },
  functionalityImage: {
    width: 20, 
    height: 20,
    marginRight: 5, 
  },
  functionalityTextContainer: {
    flex: 1, 
  },
  functionalityTitle: {
    fontSize: 6,
    fontWeight: 'bold',
    color: '#000',
  },
  functionalityDescription: {
    fontSize: 4,
    color: '#666',
  },
  line: {
    height: 0.1, 
    width: 135,
    backgroundColor: '#ccc', 
    marginTop: 5, 
    top: 2,
    right: 25,
  },
  bookButton: {
    backgroundColor: '#007BFF',
    height: 12,
    width: 45,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 5,
    top: 3,
  },
  arrowImage: {
    width: 10,
    height: 10,
    marginLeft: 5,
    right: -25,
    top: -4,
  },
  
});

export default Section2;
