import React from 'react';
// 导入ant轮播图组件
import {Carousel} from '@ant-design/react-native';
// 导入自定义列表组件
import HomeList from '../components/list-page';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import {pxSize} from '../../util';
import {SafeAreaView, CarouselImageView, CarouselImage} from './style';

function Home(props) {
  const {navigation} = props;

  const arr = [
    require('../../assets/img/swiper1.jpg'),
    require('../../assets/img/swiper2.jpg'),
    require('../../assets/img/swiper3.jpg'),
  ];
  const categories = [
    {name: '你个兔子', src: require('../../assets/bookimg/01.jpg')},
    {name: '火锅家族第二季', src: require('../../assets/bookimg/02.jpg')},
    {name: '荒野小屋', src: require('../../assets/bookimg/03.jpg')},
    {name: '明日神都', src: require('../../assets/bookimg/04.jpg')},
  ];
  function renderItem(category, index) {
    const wrapperProps = {
      key: category.name,
      onPress: () =>
        navigation.navigate('Brief', {book: index, url: category.src}),
    };
    const imgProps = {
      source: category.src,
      borderRadius: 10,
    };

    return (
      // 可以点击的组件
      <TouchableOpacity {...wrapperProps}>
        <View style={styles.categoryWrapper}>
          <Image {...imgProps} />
          <Text style={styles.text}>{category.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView>
      {/* 自动轮播 */}
      <Carousel selectedIndex={2} autoplay infinite>
        {arr.map((source) => (
          <CarouselImageView key={source}>
            <CarouselImage resizeMode="cover" source={source} />
          </CarouselImageView>
        ))}
      </Carousel>
      <ScrollView style={styles.wrapper}>
        {categories.map(renderItem)}
      </ScrollView>
    </SafeAreaView>
  );
}
// css
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  categoryWrapper: {
    width: pxSize(750),
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
export default Home;
