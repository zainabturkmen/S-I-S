import React from "react";
// import Home from "../assets/icons/home.svg";
// import About from "../assets/icons/about.svg";
// import Services from "../assets/icons/services.svg";
// import Projects from "../assets/icons/Project.svg";
// import Testimonails from "../assets/icons/testimonails.svg";
// import Phone from "../assets/icons/phone.svg";
import { IoHomeOutline } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { BsCalendar2Plus } from "react-icons/bs";
import { BiCommentCheck } from "react-icons/bi";
import { MdOutlinePhone } from "react-icons/md";

export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <IoHomeOutline />,
  },
  {
    id: 2,
    text: "About",
    url: "/about",
    icon: <LuScrollText />,
  },
  {
    id: 3,
    text: "Services",
    url: "/services",
    icon: <GrServices />,
  },
  {
    id: 4,
    text: "Projects",
    url: "/projects",
    icon: <BsCalendar2Plus />,
  },
  {
    id: 5,
    text: "Testimonails",
    url: "/testimonails",
    icon: <BiCommentCheck />,
  },
  {
    id: 6,
    text: "Contact",
    url: "/contact",
    icon: <MdOutlinePhone />,
  },
];

export const services = [
  {
    id: 1,
    // icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];
