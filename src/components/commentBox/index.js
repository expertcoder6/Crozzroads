import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

const CommentBox = () => {
  const [text, setText] = useState();
  return (
    <View style={styles.commentContainer}>
      <Image
        style={styles.imageSelectoricon}
        source={require('../../assest/images/imagesmode.jpg')}
      />
      <TextInput 
      style={{}} 
      value={text} 
      onChangeText={e => setText(e)} 
      placeholder='Type here..'
      />
      <Text>Send</Text>
    </View>
  );
};

export default CommentBox;
