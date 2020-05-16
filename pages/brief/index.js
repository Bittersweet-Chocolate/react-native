import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../components/header';
import DetailDescription from './components/detail-description';
import {pxSize} from '../../util';

function Index(props) {
  const {navigation} = props;
  const {
    state: {
      params: {book},
    },
  } = navigation;
  const Books = [
    {
      bookTitle: '你个兔子',
      type: '治愈',
      anthor: '非影Q',
      src: require('../../assets/bookimg/01.jpg'),
      brief:
        '很久很久以前，有只大魔王，烧杀抢掠无恶不作。 后来大魔王被勇者打败，变成了一只小兔子。 小兔子被卖到船上给别人打工。 船上有很多小兔子。 小兔子们都是魔王，魔王都是小兔子',
    },
    {
      bookTitle: '火锅家族第二季',
      type: '校园',
      anthor: '钟博士',
      src: require('../../assets/bookimg/02.jpg'),
      brief:
        '反转的剧情，开脑洞的故事，没节操的对话，超萌火锅食材花样作死',
    },
    {
      bookTitle: '荒野小屋',
      type: '科幻',
      anthor: 'ASK动画',
      src: require('../../assets/bookimg/03.jpg'),
      brief:
        '神秘U市的一间废弃小屋内，突然钻出了巨大的怪物，疯狂的破坏了整座U市。为了制止怪物继续肆虐，人类迫于无奈使用了核弹攻击，虽然消灭了怪物，但是也制造出了一个无人区。然而小屋不仅完好无损，还接连不断钻出新的怪物……',
    },
    {
      bookTitle: '明日神都',
      type: '冒险',
      anthor: '青葶动漫',
      src: require('../../assets/bookimg/04.jpg'),
      brief:
        '魔法水晶托举起整个城市，异能被当做一种科技形式来研究，魔法支撑着整个世界的正常运转。迷糊少年踏上了寻找遗失国度之旅，贵族大小姐？兽人萝莉？精灵族御姐？三无AI娘？我全都要！四大家族？魔法部？龙裔兄弟会？',
    },
  ];
  const {bookTitle, type, anthor, brief,src} = Books[book];
  const [tab, setTab] = useState(0);

  // 切换栏
  const tabs = [
    {
      title: '详情',
      component: <DetailDescription brief={brief} />,
    },
    {
      title: '目录',
    },
  ];
  const headerProps = {
    title: bookTitle,
    navigation,
  };

  return (
    <SafeAreaView>
      {/* header start */}
      <Header {...headerProps} />
      {/* header end */}
      {/* cover start */}
      <View style={styles.coverWrapper}>
        <Image
          blurRadius={8}
          style={styles.backgroundCover}
          source={require('../../assets/bookimg/01.jpg')}
          resizeMode="cover"
        />
        <View style={styles.cover}>
          <Image source={src} style={styles.bookCover} />
          <View style={styles.coverDescription}>
            <Text style={styles.coverTitle}>{bookTitle}</Text>
            <Text style={[styles.textColor, styles.coverType]}>
              漫画类型：{type}
            </Text>
            <Text style={[styles.textColor, styles.coverAuthor]}>
              漫画作者：{anthor}
            </Text>
          </View>
        </View>
      </View>
      {/* header end */}
      {/* tab start */}
      <View style={styles.tabWrapper}>
        {tabs.map((item, index) => {
          const {title} = item;
          const props = {
            style: styles.tab,
            key: title,
            onPress: () => setTab(index),
          };
          return (
            <TouchableOpacity {...props}>
              <Text>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {tabs[tab].component}
      {/* tab end */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  coverWrapper: {
    width: '100%',
  },
  backgroundCover: {
    width: '100%',
    height: pxSize(400),
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
  },
  cover: {
    height: pxSize(400),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bookCover: {
    width: pxSize(252),
    height: pxSize(336),
  },
  coverDescription: {
    height: pxSize(336),
    paddingLeft: 30,
  },
  coverTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
  },
  coverType: {
    paddingBottom: 10,
  },
  textColor: {
    color: '#333',
  },
  tabWrapper: {
    flexDirection: 'row',
    height: 40,
    borderBottomWidth: 1,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Index;
