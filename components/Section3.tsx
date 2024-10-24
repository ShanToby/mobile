import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Sample vehicle images
const vehicle1Image = require('../assets/images/6wheel.jpg');
const vehicle2Image = require('../assets/images/heavyvan.jpeg');
const vehicle3Image = require('../assets/images/6wheel.jpg');

// Importing the new images
const deliveryVanImage = require('../assets/images/deliveryvan.png');
const engineImage = require('../assets/images/engine.png');
const transmissionImage = require('../assets/images/transmission.png');
const weightImage = require('../assets/images/weight.png');

const Section3: React.FC = () => {
  const vehicles = [
    {
      image: vehicle1Image,
      name: '6-wheeler Truck',
      brand: 'Voyager Lorry',
      category: 'Prime Mover',
      enginePower: '260.0 kW',
      transmission: 'AMT',
      gvm: '30,000 kg',
      pricePerDay: '$239/Per Day',
    },
    {
      image: vehicle2Image,
      name: 'Heavy Van',
      brand: 'Viper XT',
      category: 'Prime Mover',
      enginePower: '260.0 kW',
      transmission: 'AMT',
      gvm: '30,000 kg',
      pricePerDay: '$139/Per Day',
    },
    {
      image: vehicle3Image,
      name: '6-wheeler Truck',
      brand: 'Voyager Lorry',
      category: 'Prime Mover',
      enginePower: '260.0 kW',
      transmission: 'AMT',
      gvm: '30,000 kg',
      pricePerDay: '$239/Per Day',
    },
  ];

  return (
    <View style={styles.sectionWrapper1}>
      <Text style={styles.topPicksTitle}>* Top Picks</Text>
      <Text style={styles.exploreText}>Explore Our Featured Vans and Trucks</Text>
      <Text style={styles.rentalsText}>Rentals for Your Next Move</Text>

      <View style={styles.vehiclesContainer}>
        {vehicles.map((vehicle, index) => (
          <TouchableOpacity key={index} style={styles.vehicleCard}>
            <Image source={vehicle.image} style={styles.vehicleImage} resizeMode="cover" />
            <View style={styles.detailsWrapper}>
              {/* Vehicle Name with grey background and rounded corners */}
              <View style={styles.vehicleNameContainer}>
                <Text style={styles.vehicleName}>{vehicle.name}</Text>
              </View>
              <Text style={styles.vehicleBrand}>{vehicle.brand}</Text>

              {/* Container for category, engine, transmission, and gvm */}
              <View style={styles.infoContainer}>
                <View style={styles.leftDetails}>
                  <View style={styles.detailRow}>
                    <Image source={deliveryVanImage} style={styles.iconImage} />
                    <Text style={styles.vehicleCategory}>Category:</Text>
                  </View>
                  <Text style={styles.vehicleCategoryDetail}>{vehicle.category}</Text>
                  <View style={styles.detailRow}>
                    <Image source={engineImage} style={styles.iconImage} />
                    <Text style={styles.vehicleEnginePower}>Engine Power:</Text>
                  </View>
                  <Text style={styles.vehicleEnginePowerDetail}>{vehicle.enginePower}</Text>
                </View>
                <View style={styles.rightDetails}>
                  <View style={styles.detailRow}>
                    <Image source={transmissionImage} style={styles.iconImage2} />
                    <Text style={styles.vehicleTransmission}>Transmission:</Text>
                  </View>
                  <Text style={styles.vehicleTransmissionDetail}>{vehicle.transmission}</Text>
                  <View style={styles.detailRow}>
                    <Image source={weightImage} style={styles.iconImage2} />
                    <Text style={styles.vehicleGvm}>GVM/GCM:</Text>
                  </View>
                  <Text style={styles.vehicleGvmDetail}>{vehicle.gvm}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.pricePerDay}>{vehicle.pricePerDay}</Text>
          </TouchableOpacity>
          
        ))}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    sectionWrapper1: {
        flexDirection: 'row',
        width: '100%', 
        height: 200,
        backgroundColor: '#fff',
      },
  topPicksTitle: {
    fontSize: 5,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  exploreText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rentalsText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  vehiclesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 15,
  },
  vehicleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
    width: '22%',
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    overflow: 'hidden',
  },
  vehicleImage: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  detailsWrapper: {
    padding: 8,
  },
  vehicleNameContainer: {
    backgroundColor: 'lightgrey', 
    borderRadius: 10, 
    paddingVertical: 2,
    paddingHorizontal: 5,
    alignSelf: 'flex-start', 
  },
  
  
  vehicleName: {
    fontSize: 2,
    fontWeight: 'bold',
    color: '#333',
  },
  vehicleBrand: {
    fontSize: 3,
    color: '#666',
    marginBottom: 2,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  leftDetails: {
    flex: 1,
    paddingRight: 10,
  },
  rightDetails: {
    flex: 1,
    paddingLeft: 10,
    alignItems: 'flex-end',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    width: '100%',
  },
  iconImage: {
    width: 5,
    height: 5,
    marginRight: 5,
  },
  iconImage2: {
    width: 5,
    height: 5,
    marginRight: 5,
  },
  vehicleCategory: {
    fontSize: 1,
    color: '#666',
  },
  vehicleCategoryDetail: {
    fontSize: 1,
    color: '#666',
    marginBottom: 5,
  },
  vehicleEnginePower: {
    fontSize: 1,
    color: '#666',
    marginBottom: 5,
  },
  vehicleEnginePowerDetail: {
    fontSize: 1,
    color: '#666',
    marginBottom: 5,
  },
  vehicleTransmission: {
    fontSize: 1,
    color: '#666',
  },
  vehicleTransmissionDetail: {
    fontSize: 1,
    color: '#666',
    marginBottom: 5,
  },
  vehicleGvm: {
    fontSize: 1,
    color: '#666',
  },
  vehicleGvmDetail: {
    fontSize: 1,
    color: '#666',
  },
  pricePerDay: {
    fontSize: 5,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginVertical: 5,
    right: 30,
  },
});

export default Section3;
