import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `
  //         *[_type == "featured"]{
  //         ...,
  //         restaurants[]->{
  //         ...,
  //         dishes[]->
  //         }
  //         }
  //       `
  //     )
  //     .then((data) => {
  //       setFeaturedCategories(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // console.log("fc:", featuredCategories);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-white pt-5"
    >
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center">
          <MagnifyingGlassIcon color={"gray"} size={20} />
          <TextInput
            placeholder="Restaurents and Cuisines"
            keyboardType="default"
            className=""
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Catagories */}
        <Categories />

        {/* Featured Rows */}

        {/* Featured From API */}
        {/* {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category.id}
            id={category.id}
            title={category.name}
            description={category.short_description}
          />
        ))} */}

        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />

        {/* Offers near you */}
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
