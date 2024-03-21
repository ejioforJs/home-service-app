import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"
import BusinessListItem from "./BusinessListItem";
import GlobalApi from "../../Utils/GlobalApi";
import Colors from "../../Utils/Colors";

export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation()

  const [businessList, setBusinessList] = useState([])
  useEffect(() => {
    param && getBusinessByCategory()
  }, [param]);

  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then(resp => {
      setBusinessList(resp.businessLists)
      console.log(resp.businessLists)
    })
  }
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {" "}
          {param.category}
        </Text>
      </TouchableOpacity>
      {businessList?.length > 0 ? 
      (
        <FlatList
     data={businessList}
     style={{marginTop: 15}}
     renderItem={({item,index}) => (
       <BusinessListItem business={item} />
     )} />
      ) : <Text style={{fontFamily: 'outfit-medium',color: Colors.GRAY, fontSize: 20, textAlign: 'center', marginTop: '20%'}}>No business found</Text>
    }
    </View>
  );
}
