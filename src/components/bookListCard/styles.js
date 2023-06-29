import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flex:1,
    height: 257,
    width: 203,
    marginHorizontal:1
  },
  imageContainer: {
    height: 177,
    width: 203,
  },
 textContainer:{
     paddingHorizontal:10
 } ,
  priceTag:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:5
  },
  discount:{
      color:'red',
      fontWeight:'bold'
  },
  price:{
    color:'black',
    fontWeight:'bold'
},
title:{
    marginTop:5
}
});
