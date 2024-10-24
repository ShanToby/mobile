import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const largeImage = require('../assets/images/largetruck.jpeg'); 
const smallImage1 = require('../assets/images/smalltruck1.jpeg'); 
const smallImage2 = require('../assets/images/smalltruck2.jpeg'); 
const smallImage3 = require('../assets/images/smalltruck3.jpeg');

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
      <Text style={styles.topUpdatesTitle}>* Latest Updates</Text>
      <Text style={styles.newsText}>News and Expert Reviews on Truck</Text>
      <Text style={styles.rentalsText}>Rentals and Services</Text>

      <View style={styles.contentContainer}>
        <View style={styles.largeImageContainer}>
          <Image source={largeImage} style={styles.largeImage} resizeMode="cover" />
          <View style={styles.largeImageOverlay}>
            <Text style={styles.largeUpdateDate}>{largeUpdate.date}</Text>
            <Text style={styles.largeUpdateDescription}>{largeUpdate.description}</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <FontAwesome name="arrow-right" size={15} color="#fff" />
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
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* View All button with arrow icon */}
      <View style={styles.viewAllContainer}>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <FontAwesome name="arrow-circle-right" size={15} color="#007bff" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 300,
    backgroundColor: 'grey',
    width: '90%',
    left: 20,
  },
  topUpdatesTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  newsText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rentalsText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
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
    justifyContent: 'flex-start', // Aligns content to the top
    alignItems: 'flex-start', // Aligns content to the left
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay with transparency
    padding: 10,
  },
  largeUpdateTextContainer: {
    flexDirection: 'column', // Arranges items vertically
  },
  largeUpdateDate: {
    fontSize: 5, // Date font size
    color: '#fff',
    marginBottom: 5,
    top: 90,
  },
  largeUpdateDescription: {
    fontSize: 6, // Description font size
    color: '#fff',
    marginBottom: 10,
    top: 90,
  },
  arrowButton: {
    padding: 4,
    backgroundColor: '#007BFF',
    borderRadius: 12,
    top: 80,
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
    fontSize: 3,
    color: '#666',
  },
  updateDescription: {
    fontSize: 4,
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
  },
  viewAllText: {
    fontSize: 12,
    color: '#007bff',
    marginRight: 5,
  },
  arrowIcon: {
    marginLeft: 5,
  },
});

export default Section4;
