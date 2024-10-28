import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const largeImage = require('../assets/images/largetruck.jpeg'); 
const smallImage1 = require('../assets/images/smalltruck1.jpeg'); 
const smallImage2 = require('../assets/images/smalltruck2.jpeg'); 
const smallImage3 = require('../assets/images/smalltruck3.jpeg');

const arrowImage = require('../assets/images/arrow.png'); 

const lineImage = require('../assets/images/line.png');

const Section4: React.FC = () => {
  const largeUpdate = {
    date: 'August 5, 2024',
    description: 'Exploring your rental car options:\nVan or truck?',
  };

  const smallUpdates = [
    {
      image: smallImage1,
      date: 'August 5, 2024',
      description: 'Exploring your rental car options:\nVan or truck?',
    },
    {
      image: smallImage2,
      date: 'August 5, 2024',
      description: 'Exploring your rental car options:\nVan or truck?',
    },
    {
      image: smallImage3,
      date: 'August 5, 2024',
      description: 'Exploring your rental car options:\nVan or truck?',
    },
  ];

  return (
    <View style={styles.sectionWrapper}>
         <View style={styles.contentWrapper}>
      <Text style={styles.topUpdatesTitle}>* Latest Updates</Text>
      <Image source={lineImage} style={styles.lineImage} />
      <Text style={styles.newsText}>News and Expert Reviews on Truck</Text>
      <Text style={styles.rentalsText}>Rentals and Services</Text>

      <View style={styles.contentContainer}>
        <View style={styles.largeImageContainer}>
          <Image source={largeImage} style={styles.largeImage} resizeMode="cover" />
          <View style={styles.largeImageOverlay}>
            <Text style={styles.largeUpdateDate}>{largeUpdate.date}</Text>
            <Text style={styles.largeUpdateDescription}>{largeUpdate.description}</Text>
            <TouchableOpacity style={styles.arrowButton}>
            <Image source={arrowImage} style={styles.arrowImage} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.smallImagesContainer}>
          {smallUpdates.map((update, index) => (
            <View key={index} style={styles.smallUpdateCard}>
              <Image source={update.image} style={styles.smallImage} resizeMode="cover" />
              <View style={styles.updateDetails}>
                <Text style={styles.updateDate}>{update.date}</Text>
                <Text style={styles.updateDescription}>{update.description}</Text>
                <TouchableOpacity style={styles.readMoreButton}>
                  <Text style={styles.readMoreText}>Read More</Text>
                  <Image source={arrowImage} style={styles.arrowImage2} /> 
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.viewAllContainer}>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
        <Image source={arrowImage} style={styles.arrowImage1} /> 
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 243,
    backgroundColor: '#fff',
    width: '100%',
  },
  contentWrapper: {
    backgroundColor: 'rgba(173, 216, 230, 0.1)',
    padding: 10,
    width: '99%',
    left: 2,
    borderRadius: 10,
  },
  
  topUpdatesTitle: {
    fontSize: 5,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 5,
    top: 11,
  },
  newsText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    top: 8,
  },
  rentalsText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    top: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeImageContainer: {
    width: '43%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    left: 40,
    top: 10,
  },
  largeImage: {
    width: '100%',
    height: '100%',
  },
  largeImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    padding: 10,
  },
  largeUpdateTextContainer: {
    flexDirection: 'column', 
  },
  largeUpdateDate: {
    fontSize: 5,
    color: '#fff',
    marginBottom: 5,
    top: 98,
  },
  largeUpdateDescription: {
    fontSize: 6,
    color: '#fff',
    marginBottom: 10,
    top: 98,
    fontWeight: 'bold',
  },
  arrowButton: {
    padding: 4,
    borderRadius: 12,
    top: 88,
    left: -10,
  },
  smallImagesContainer: {
    width: '35%',
    justifyContent: 'space-between',
  },
  smallUpdateCard: {
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: 'row',
    right: 35,
    top: 10,
  },
  smallImage: {
    width: 47,
    height: 47,
    borderRadius: 5,
    marginRight: 5,
  },
  updateDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  updateDate: {
    fontSize: 5,
    color: '#666',
  },
  updateDescription: {
    fontSize: 5,
    color: '#333',
    marginVertical: 5,
  },
  readMoreButton: {
    paddingVertical: 2,
    marginTop: 5,
  },
  readMoreText: {
    fontSize: 4,
    color: '#007bff',
  },
  viewAllContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 5, 
    borderRadius: 20,
    backgroundColor: '#007BFF',
  },
  
  viewAllText: {
    fontSize: 5,
    color: '#fff',
  },
  arrowImage: {
    width: 8, 
    height: 8,
    marginLeft: 5, 
  },
  arrowImage1: {
    width: 7, 
    height: 7,
    marginLeft: 5, 
    left: -5,
  },
  arrowImage2: {
    width: 4, 
    height: 4,
    marginLeft: 5, 
    left: 12,
    top: -4,
  },

  lineImage: {
    width: '5%',
    height: 5,
    top: 7,
    alignSelf: 'center',
    tintColor: 'rgba(173, 216, 230, 0.8)',
  },


});

export default Section4;
