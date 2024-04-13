import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://www.foodandwine.com/thmb/4Bt2yPC5El7vUBWZm_uFXD_vOyQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/California-Sushi-Rolls-FT-RECIPE0123-efc7744ed3e642c7864788a7c227facb.jpg"
        title="Sushi"
      />
      <CategoryCard
        imgUrl="https://img-global.cpcdn.com/recipes/04bd42dcc44c80a8/1200x630cq70/photo.jpg"
        title="Biryani"
      />
      <CategoryCard
        imgUrl="https://forkfulofplants.com/wp-content/uploads/2021/06/Vegan-Shahi-Korma-30.jpg"
        title="Korma"
      />
      <CategoryCard
        imgUrl="https://www.kitchenathoskins.com/wp-content/uploads/2023/07/chicken-tikka-13.jpg"
        title="Tikka"
      />
      <CategoryCard
        imgUrl="https://www.indianveggiedelight.com/wp-content/uploads/2017/09/coconut-milk-pulao-featured-1.jpg"
        title="Pulao"
      />
    </ScrollView>
  );
};

export default Categories;
