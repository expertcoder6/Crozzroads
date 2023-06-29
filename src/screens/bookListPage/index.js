import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BookListData} from './BookListData';
import BookListCard from '../../components/bookListCard';
import {styles} from './styles';
import Header from '../../components/header';
const URL = 'https://student-demo-app-b04474eab0dd.herokuapp.com/api/v1/books';

const BookListPage = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getBookList = () => {
    setLoading(true);
    setTimeout(() => {
      fetch(URL)
        .then(res => res.json())
        .then(json => {
          if (json.status === 'success') {
            setLoading(false);
            setRefreshing(false);
            setBookList(prevData => [...prevData, ...json.data]);
          }
        })
        .catch(err => alert('Api expired'));
    }, 2000);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getBookList();
  };

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header title={'Book List Page'} />
      <FlatList
        data={bookList.length ? bookList : BookListData}
        numColumns={2}
        keyExtractor={item => Math.random() + item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        renderItem={({item}) => {
          return <BookListCard item={item} />;
        }}
        onEndReached={getBookList} 
        onEndReachedThreshold={0.5}
      />
      {loading && <ActivityIndicator size="large" />}
    </View>
  );
};

export default BookListPage;
