import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import Heading from "../../components/Heading";

export default function BusinessDetailScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtnContainer}
      >
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <Image
        source={{ uri: business?.images[0].url }}
        style={{ width: "100%", height: 300 }}
      />
      <View style={styles.infoContainer}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
          {business?.name}
        </Text>
        <View style={styles.subContainer}>
          <Text style = {{fontFamily: 'outfit-medium', color: Colors.PRIMARY, fontSize: 20}}>{business?.contactPerson} 🌟</Text>
          <Text style={{color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_LIGHT, padding: 5,borderRadius: 5, fontSize: 14}}>{business?.category?.name}</Text>
        </View>
        <Text>{business?.address}</Text>
        <View style={{borderWidth: 0.4, borderColor: Colors.GRAY, marginTop: 30, marginBottom: 15}}></View>
        <View>
            <Heading text={'About Me'} />
            <Text style={{fontFamily: 'outfit', lineHeight: 25,color: Colors.GRAY,fontSize: 16, lineHeight: 28}}>
                {business.about}
            </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
     padding: 20,
     display: 'flex',
     gap: 7
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  }
});
