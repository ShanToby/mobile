import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const vehicle1Image = require('../assets/images/6wheel.jpg');
const vehicle2Image = require('../assets/images/heavyvan.jpeg');
const vehicle3Image = require('../assets/images/6wheel.jpg');

const deliveryVanImage = require('../assets/images/deliveryvan.png');
const engineImage = require('../assets/images/engine.png');
const transmissionImage = require('../assets/images/transmission.png');
const weightImage = require('../assets/images/weight.png');
const arrowImage = require('../assets/images/arrow.png');


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

  const handleArrowPress = () => {
    console.log('Arrow pressed!');
  };

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
              <View style={styles.vehicleNameContainer}>
                <Text style={styles.vehicleName}>{vehicle.name}</Text>
              </View>
              <Text style={styles.vehicleBrand}>{vehicle.brand}</Text>
              <View style={styles.infoContainer}>
                <View style={styles.leftDetails}>
                  <View style={styles.detailRow}>
                    <Image source={deliveryVanImage} style={styles.iconImage} />
                    <Text style={styles.vehicleCategory}>Category</Text>
                  </View>
                  <Text style={styles.vehicleCategoryDetail}>{vehicle.category}</Text>
                  <View style={styles.detailRow}>
                    <Image source={engineImage} style={styles.iconImage} />
                    <Text style={styles.vehicleEnginePower}>Engine Power</Text>
                  </View>
                  <Text style={styles.vehicleEnginePowerDetail}>{vehicle.enginePower}</Text>
                </View>
                <View style={styles.rightDetails}>
                  <View style={styles.detailRow}>
                    <Image source={transmissionImage} style={styles.iconImage2} />
                    <Text style={styles.vehicleTransmission}>Transmission</Text>
                  </View>
                  <Text style={styles.vehicleTransmissionDetail}>{vehicle.transmission}</Text>
                  <View style={styles.detailRow}>
                    <Image source={weightImage} style={styles.iconImage2} />
                    <Text style={styles.vehicleGvm}>GVM/GCM</Text>
                  </View>
                  <Text style={styles.vehicleGvmDetail}>{vehicle.gvm}</Text>
                  <View style={styles.line} />
                </View>
              </View>
            </View>
            <View style={styles.pricePerDayContainer}>
  <Text style={styles.pricePerDayBold}>{vehicle.pricePerDay.split('/')[0]}</Text>
  <Text style={styles.pricePerDayRegular}>{`/Per Day`}</Text>
  <TouchableOpacity onPress={handleArrowPress}>
    <Image source={arrowImage} style={styles.arrowImage} />
  </TouchableOpacity>
</View>


          </TouchableOpacity>
          
        ))}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    sectionWrapper1: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
      },
  topPicksTitle: {
    fontSize: 5,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 5,
    top: -10,
  },
  exploreText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    top: -10,
  },
  rentalsText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    top: -10,
  },
  vehiclesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 8,
  },
  vehicleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 2,
    width: '23%',
    height: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    overflow: 'hidden',
    top: -10,
    borderWidth: 0.2,
  },
  vehicleImage: {
    width: '100%',
    height: 50,
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
    left: -4,
  },
  
  vehicleName: {
    fontSize: 2,
    fontWeight: 'bold',
    color: '#333',
  },
  vehicleBrand: {
    fontSize: 5,
    color: '#666',
    marginBottom: 2,
    fontWeight: 'bold',
    left: -2,
    top: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    left: -2,
  },
  leftDetails: {
    flex: 1,
    paddingRight: 1,
  },
  rightDetails: {
    flex: 1,
    paddingLeft: 10,
    alignItems: 'flex-end',
    left: -4,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconImage: {
    width: 6,
    height: 6,
    marginRight: 2,
  },
  iconImage2: {
    width: 6,
    height: 6,
    marginRight: 2,
  },
  vehicleCategory: {
    fontSize: 3,
    color: '#666',
    fontWeight: 'bold'
  },
  vehicleCategoryDetail: {
    fontSize: 3,
    color: '#666',
    marginBottom: 5,
  },
  vehicleEnginePower: {
    fontSize: 3,
    color: '#666',
    fontWeight: 'bold'
  },
  vehicleEnginePowerDetail: {
    fontSize: 3,
    color: '#666',
    marginBottom: 5,
  },
  vehicleTransmission: {
    fontSize: 3,
    color: '#666',
    fontWeight: 'bold'
  },
  vehicleTransmissionDetail: {
    fontSize: 3,
    color: '#666',
    marginBottom: 5,
    left: -24,
  },
  vehicleGvm: {
    fontSize: 3,
    color: '#666',
    fontWeight: 'bold'
  },
  vehicleGvmDetail: {
    fontSize: 3,
    color: '#666',
    left: -18,
  },
  line: {
    height: 0.5, 
    width: 75,
    backgroundColor: '#ccc', 
    left: 10,
    top: 2,
  },
  pricePerDayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  pricePerDayBold: {
    fontSize: 5,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 5,
    right: 22,
    top: -15,
  },
  
  pricePerDayRegular: {
    fontSize: 3,
    fontWeight: 'normal',
    color: '#000',
    textAlign: 'center',
    marginVertical: 5,
    top: -14,
    left: -22,
  },
  
  arrowImage: {
    fontSize: 5,
    color: '#007BFF',
    marginLeft: 3,
    top: -15,
    left: 22,
    width: 7,
    height: 7,
  },
});

export default Section3;
