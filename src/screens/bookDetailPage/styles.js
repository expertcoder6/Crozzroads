import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  detailContainer: {
    // flex:1,
    backgroundColor:'white'
  },
  detailInnerContainer:{paddingHorizontal:10},
  imageContainer: {
    height: 450,
    width: '100%',
  },
 textContainer:{
     paddingHorizontal:10
 } ,
  priceTag:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:15,
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
fontWeight:'700',
fontSize:16,
marginTop:5
},
description:{
  fontWeight:'400',
  fontSize:12
},
lineSeperator:{
  height:1,
  width:'100%',
  backgroundColor:'#F7F8FA',
  marginVertical:10
},
frame1:{
  width:37,
  height:37,
  borderRadius:100
},
commentContainer:{
  marginLeft:40
},
iconContainer:{
  flexDirection:'row',
  // justifyContent:'center'
},
frame2:{
  marginVertical:10
},
panel:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginTop:10
},
threedot:{
  width:20,
  height:5
},
profileDetail:{
  flexDirection:'row',
  alignItems:'center'
}
});
