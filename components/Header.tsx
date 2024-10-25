import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/Truckrental.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.navContainer}>
        {['All Vehicles', 'Showroom', 'About', 'News & Reviews', 'Help & Support'].map((item) => (
          <Text key={item} style={styles.navItem}>
            {item}
          </Text>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookRentalButton}>
          <Text style={styles.bookRentalText}>Book a Rental</Text>
        </TouchableOpacity>
        <Image 
          source={require('../assets/images/arrow.png')} 
          style={styles.arrowImage} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 5,
    backgroundColor: '#ffff',
    height: 25,
  },
  logoContainer: {
    flex: 1,
    left: 50,
  },
  logo: {
    width: 60,
    height: 40,
  },
  navContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navItem: {
    fontSize: 4.2,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    right: 40,
  },

  signInButton: {
    marginRight: 5,
  },
  signInText: {
    color: '#000',
    fontSize: 4.2,
  },
  bookRentalButton: {
    backgroundColor: '#007bff', 
    paddingVertical: 2.5,
    paddingHorizontal: 7,
    borderRadius: 10,
    color: '#fff',
  },
  bookRentalText: {
    color: '#fff',
    fontSize: 4.2,
  },
  arrowImage: {
    width: 10, // Adjust the size as needed
    height: 10, // Adjust the size as needed
    alignSelf: 'center', // Center align with the button
  },
});

export default Header;
