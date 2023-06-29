import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = ({title = 'header', isBackButton}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        disabled={!isBackButton}
        onPress={() => navigation.goBack()}>
        {isBackButton && (
          <Image
            style={styles.backIcon}
            source={require('../../assest/images/ARROW.jpg')}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.titleHeader}>{title}</Text>
      <Text>{}</Text>
    </View>
  );
};

export default Header;
