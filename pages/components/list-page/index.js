import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import {pxSize} from '../../../util';
function Index(props) {
  const {navigation} = props;
  const categories = [
    {name: '你个兔子', src: require('../../../assets/bookimg/01.jpg')},
    {name: '火锅家族第二季', src: require('../../../assets/bookimg/02.jpg')},
    {name: '荒野小屋', src: require('../../../assets/bookimg/03.jpg')},
    {name: '明日神都', src: require('../../../assets/bookimg/04.jpg')},
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
      <TouchableOpacity {...wrapperProps}>
        <View style={styles.categoryWrapper} > 
          <Image {...imgProps} />
          <Text style={styles.text}>{category.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <ScrollView style={styles.wrapper}>{categories.map(renderItem)}</ScrollView>
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
export default Index;
