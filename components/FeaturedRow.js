import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurentCard */}
        <RestaurentCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Biryani"
          rating={4.5}
          genre="Pakistan"
          address="123 Main St"
          short_description="this is a test desc"
          dishes={[]}
          long={20}
          lat={2}
        />
        <RestaurentCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Korma"
          rating={4.5}
          genre="Pakistan"
          address="123 Main St"
          short_description="this is a test desc"
          dishes={[]}
          long={20}
          lat={2}
        />
        <RestaurentCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="this is a test desc"
          dishes={[]}
          long={20}
          lat={2}
        />
        <RestaurentCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Chicken"
          rating={4.5}
          genre="Dubai"
          address="123 Main St"
          short_description="this is a test desc"
          dishes={[]}
          long={20}
          lat={2}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
