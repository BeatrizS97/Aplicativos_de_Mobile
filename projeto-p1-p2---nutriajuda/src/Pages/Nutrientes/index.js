import React, { useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';

// Importe suas telas como componentes
import Carboidratos from '../Carboidratos';
import Frutas from '../Frutas';
import Gorduras from '../Gorduras';
import Proteinas from '../Proteinas';

const screenWidth = Dimensions.get('window').width;

export default function Nutrientes({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(x / screenWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ width: screenWidth * 4 }}
      >
        <View style={{ width: screenWidth }}>
          <Carboidratos navigation={navigation} />
        </View>
        <View style={{ width: screenWidth }}>
          <Frutas navigation={navigation} />
        </View>
        <View style={{ width: screenWidth }}>
          <Gorduras navigation={navigation} />
        </View>
        <View style={{ width: screenWidth }}>
          <Proteinas navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});