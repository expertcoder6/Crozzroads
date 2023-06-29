import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import {useRoute} from '@react-navigation/native';
import {styles} from './styles';
import CommentBox from '../../components/commentBox';

const BaseUrl = 'https://student-demo-app-b04474eab0dd.herokuapp.com';

const BookDetailPage = () => {
  const {params} = useRoute();
  const {coverImage, title, description, price, discount, comments} =
    params?.item;
  return (
    <>
      <ScrollView>
        <View style={styles.detailContainer}>
          <Header title={title} isBackButton />
          <Image
            resizeMode="cover"
            style={styles.imageContainer}
            source={{uri: `${BaseUrl}/${coverImage}`}}
          />
          <View style={styles.detailInnerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{'Decription of the book'}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.priceTag}>
              <Text style={styles.discount}>{discount + '%'}</Text>
              <Text style={styles.price}>{'Rs ' + price}</Text>
            </View>
            <View style={styles.lineSeperator} />
            <FlatList
              data={comments}
              keyExtractor={item => 'bookId' + item.bookId}
              renderItem={({item}) => {
                return (
                  <>
                    <View style={styles.panel}>
                      <View style={styles.profileDetail}>
                        <Image
                          style={styles.frame1}
                          source={{uri: BaseUrl + '/' + item.profileImage}}
                        />
                        <Text
                          style={{
                            marginHorizontal: 5,
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#1D232B',
                          }}>
                          {'FullName'}
                        </Text>
                        <Image
                          style={styles.check}
                          source={require('../../assest/images/check.jpg')}
                        />
                        <Text
                          style={{
                            fontSize: 10,
                            fontWeight: '500',
                            color: '#919EB6',
                            marginLeft: 5,
                          }}>
                          {'Time'}
                        </Text>
                      </View>
                      <Image
                        style={styles.threedot}
                        source={require('../../assest/images/ThreeDot.jpg')}
                      />
                    </View>
                    <View style={styles.commentContainer}>
                      <Text style={styles.commentText}>{item.commentText}</Text>
                      <View style={styles.iconContainer}>
                        <Image
                          style={styles.heartIcon}
                          source={require('../../assest/images/heart.jpg')}
                        />
                        <Image
                          style={styles.commentIcon}
                          source={require('../../assest/images/comment.jpg')}
                        />
                      </View>
                      {item?.subComments?.map(ele => {
                        return (
                          <>
                            <View
                              key={'bookId' + ele.commentId}
                              style={styles.panel}>
                              <View style={styles.profileDetail}>
                                <Image
                                  style={styles.frame1}
                                  source={{
                                    uri: BaseUrl + '/' + ele.profileImage,
                                  }}
                                />
                                <Text
                                  style={{
                                    marginHorizontal: 5,
                                    fontSize: 14,
                                    fontWeight: '700',
                                    color: '#1D232B',
                                  }}>
                                  {'FullName'}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: 10,
                                    fontWeight: '500',
                                    color: '#919EB6',
                                    marginLeft: 5,
                                  }}>
                                  {'Time'}
                                </Text>
                              </View>
                              <Image
                                style={styles.threedot}
                                source={require('../../assest/images/ThreeDot.jpg')}
                              />
                            </View>
                            <Text style={styles.commentText}>
                              {ele?.subCommentText.substring(0, 100)}
                            </Text>
                            <View style={styles.iconContainer}>
                              <Image
                                style={styles.heartIcon}
                                source={require('../../assest/images/heart.jpg')}
                              />
                              <Image
                                style={styles.commentIcon}
                                source={require('../../assest/images/comment.jpg')}
                              />
                            </View>
                          </>
                        );
                      })}
                    </View>
                  </>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <CommentBox />
    </>
  );
};

export default BookDetailPage;
