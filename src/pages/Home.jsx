import React from "react";
import Navbar from "../components/Navbar"
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import FoodCart from "../components/FoodCart";


const Home = () => {
    return (
        <>
         <Navbar />
         <CategoryMenu/>
         <FoodItems/>
         <FoodCart/>
         
        </>
    );
};

export default Home;