import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';


import burgerKingImage from '../Images/burger-king-4 1.png';
import image8Image from '../Images/image 8.png';
import vectorImage from '../Images/Vector.png';
import ellipseImage from '../Images/Ellipse.png';
import ellipse767Image from '../Images/Ellipse 767.png';

const data1 = [
  { id: '1', title: 'Software Engineer', subtitle: 'Facebook' },
  { id: '2', title: 'Software Developer', subtitle: 'Google' },
  { id: '3', title: 'Backend Developer', subtitle: 'Facebook' },
  { id: '4', title: 'Fullstack Developer', subtitle: 'LinkedIn' },
  
];

const data2 = [
  { id: '1', title: 'Jr Executive        $96,000/y', subtitle: 'Burger King        Los Angeles,US', image: burgerKingImage },
  { id: '2', title: 'Product Manager     $84.000/y  ', subtitle: 'Beats                Florida,US', image: image8Image },
  { id: '3', title: 'Product Manager     $86,000/y', subtitle: 'Faceebook         Florida,US', image: vectorImage },
  
];

const HomePage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    
    console.log('Searching for:', searchText);
    
  };

  const renderItem1 = ({ item }) => (
    <View style={styles.item1}>
      <Text style={styles.itemText1}>{item.title}</Text>
      <Text style={styles.subtitle1}>{item.subtitle}</Text>
    </View>
  );

  const renderItem2 = ({ item }) => (
    <View style={styles.item2}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer2}>
        <Text style={styles.itemText2}>{item.title}</Text>
        <Text style={styles.subtitle2}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Images in the top-right corner */}
      <View style={styles.imageContainer}>
        <Image source={ellipseImage} style={styles.image} />
        <Image source={ellipse767Image} style={styles.image} />
      </View>

      {/* Title, subtitle, and search input/button */}
      <Text style={styles.title}>Welcome User</Text>
      <Text style={styles.subtitle}>user@email.com</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search a job or position"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* First FlatList (data1) */}
      <Text style={styles.listTitle}>Featured Jobs</Text>
      <FlatList
        data={data1}
        keyExtractor={item => item.id}
        renderItem={renderItem1}
        horizontal 
        contentContainerStyle={styles.flatList1} 
      />

      {/* Second FlatList (data2) */}
      <Text style={styles.listTitle}>Popular Jobs</Text>
      <FlatList
        data={data2}
        keyExtractor={item => item.id}
        renderItem={renderItem2}
        style={styles.flatList2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  input: {
    height: 40,
    width: '70%',
    marginRight: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 9,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listTitle: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  flatList1: {
    marginTop: 10,
  },
  item1: {
    backgroundColor: '#D3D3D3', 
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  itemText1: {
    fontSize: 15,
  },
  subtitle1: {
    fontSize: 12,
    color: '#666',
  },
  flatList2: {
    width: '100%',
    marginBottom: 20,
  },
  item2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10, 
  },
  textContainer2: {
    marginLeft: 10,
  },
  itemText2: {
    fontSize: 16,
  },
  subtitle2: {
    fontSize: 12,
    color: '#666',
  },
  imageContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 30, 
  },
});

export default HomePage;
