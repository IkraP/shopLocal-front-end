import React from 'react';
import {Text, View, Image} from 'react-native';

const ShopCard = () => {
  return (
    <View style={styled.card}>
      <View style={styled.imageView}>
        <Image
          source={require('../images/bakeryPic.jpg')}
          style={styled.image}
        />
      </View>
      <View style={styled.text}>
        <Text>hello</Text>
      </View>
    </View>
  );
};

const styled = {
  card: {
    flex: 1,
    backgroundColor: 'rgba(20, 156, 12, 0.3)',
    borderRadius: 20,
    height: 200,
    marginTop: 20,
  },
  text: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  imageView: {flex: 1},
  image: {
    flex: 1,
    width: null,
    resizeMode: 'stretch',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
};

export default ShopCard;