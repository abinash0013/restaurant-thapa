import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import Navbar from "./Navbar";
import MenuCard from "./MenuCard";

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
// console.log(uniqueList);
const Restaurant = () => {
    const [menuData, setMenuDate] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
            setMenuDate(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuDate(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
