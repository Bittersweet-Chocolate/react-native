import React, {memo} from 'react';
import {SafeAreaView,Text,ScrollView,TouchableOpacity,
  View,
  Image,
  StyleSheet} from 'react-native';
import Header from '../components/header';
import {pxSize} from '../../util';

function Index(props) {
  const {navigation} = props;
  const {
    state: {
      params: {category},
    },
  } = navigation;
  const headerProps = {
    navigation,
    title: category.name,
  };
  const categories = [
    {name:'爆笑喜剧系列:你个兔子',src:require('../../assets/bookimg/01.jpg')},
    {name:'爆笑喜剧系列:火锅家族第二季',src:require('../../assets/bookimg/02.jpg')},
    {name:'爆笑喜剧系列:荒野小屋',src:require('../../assets/bookimg/03.jpg')},
    {name:'爆笑喜剧系列:明日神都',src:require('../../assets/bookimg/04.jpg')}
  ];
  function renderItem(category, index) {
    const wrapperProps = {
      key: category.name
    };
    const imgProps = {
      source: category.src,
      borderRadius: 10,
    };

    return (
      <TouchableOpacity {...wrapperProps}>
        <View style={styles.categoryWrapper}>
          <Image {...imgProps} />
          <Text style={styles.text}>{category.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView >
      <Header {...headerProps} />
      <Text>没有更多了。。。</Text>
      {/* <ScrollView>
      {categories.map(renderItem)}
      </ScrollView> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  categoryWrapper: {
    width: pxSize(750 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  category: {
    width: pxSize(200),
    height: pxSize(180),
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
  },
});
export default memo(Index);
