// import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import {
  MdHome,
  MdAccountCircle,
  MdDashboard,
  MdViewList,
  MdShoppingBasket,
} from "react-icons/md";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <MdHome />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <MdAccountCircle />,
  },
  {
    title: "DashBoard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <MdViewList />,
  },
  {
    title: "My Shop",
    path: "/my-shop",
    icon: <MdShoppingBasket />,
  },
];
