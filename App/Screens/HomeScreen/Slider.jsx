import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../components/Heading";

export default function Slider() {
    const [slider, setSlider] = useState([])
  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    try {
      const resp = await GlobalApi.getSlider();
      setSlider(resp?.sliders)
    } catch (error) {
      console.error("Error fetching sliders:", error);
    }
  };

  return (
    <View>
      <Heading text={"Offers For You"} />
      <FlatList
      data={slider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index}) => (
        <View style={{marginRight: 20}}>
            <Image source={{uri: item?.image?.url}} style={styles.sliderImage} />
        </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10
    },
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 30,
        objectFit: 'contain'
    }
})