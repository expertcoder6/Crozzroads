import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const BaseUrl='https://student-demo-app-b04474eab0dd.herokuapp.com'
const BookListCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookDetailPage',{item})}
      style={styles.cardContainer}>
      <Image style={styles.imageContainer} source={{uri: `${BaseUrl}/${item.coverImage}`}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceTag}>
          <Text style={styles.discount}>{item.discount+'%'}</Text>
          <Text style={styles.price}>{'Rs '+item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookListCard;
