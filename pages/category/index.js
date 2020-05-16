import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import {pxSize} from '../../util';
import {baseImgUrl} from '../api';
function Index(props) {
  const {navigation} = props;
  const categories = [
    {name:'爆笑喜剧',src:require('../../assets/bookimg/11.jpg')},
    {name:'少年热血',src:require('../../assets/bookimg/12.jpg')},
    {name:'武侠格斗',src:require('../../assets/bookimg/13.jpg')},
    {name:'少女爱情',src:require('../../assets/bookimg/14.jpg')},
    {name:'恐怖灵异',src:require('../../assets/bookimg/15.jpg')},
    {name:'侦探推理',src:require('../../assets/bookimg/16.jpg')},
    {name:'科幻魔幻',src:require('../../assets/bookimg/17.jpg')},
    {name:'竞技体育',src:require('../../assets/bookimg/18.jpg')},
    {name:'其它漫画',src:require('../../assets/bookimg/19.jpg')},
  ];
  function renderItem(category, index) {
    const wrapperProps = {
      key: category.name,
      // 点击跳转
      onPress: () => navigation.navigate('CategoryList', {category}),
      // onPress: () => Alert.alert('没有更多了')
    };
    const uri = `${baseImgUrl}cate${index + 1}.jpg`;
    const imgProps = {
      style: styles.category,
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
    <SafeAreaView style={styles.wrapper}>
      {categories.map(renderItem)}
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
    width: pxSize(750 / 3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  category: {
    width: pxSize(180),
    height: pxSize(180),
  },
  text: {
    padding: 10,
  },
});
export default Index;
