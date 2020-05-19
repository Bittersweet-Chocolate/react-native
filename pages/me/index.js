import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Linking} from 'react-native';
import Header from './components/header';
import Section from './components/section';

function Home(props) {
  const {navigation} = props;

  function renderSection() {
    const sectionArr = [
      [
        {
          title: 'Github',
          image: require('../../assets/img/mine/github.png'),
          onPress: () =>
            Linking.openURL('https://github.com/Bittersweet-Chocolate'),
        },
        {
          title: '博客',
          subtitle: '天才第一步',
          image: require('../../assets/img/mine/icon_mine_comment.png'),
          onPress: () =>
            Linking.openURL('https://bittersweet-chocolate.github.io'),
        },
      ],
      [
        {
          title: '关于我',
          subtitle: '我要合作',
          image: require('../../assets/img/mine/icon_mine_aboutmeituan.png'),
          onPress: () => navigation.navigate('AboutMe'),
        },
      ],
    ];
    return sectionArr.map((section, index) => (
      <Section section={section} key={index} />
    ));
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <Header navigation={navigation} />
        {renderSection()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});
export default Home;
