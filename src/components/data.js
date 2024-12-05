import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { BsCalendar2Plus } from "react-icons/bs";
import { BiCommentCheck } from "react-icons/bi";
import { MdOutlinePhone } from "react-icons/md";
import { MdGraphicEq } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { MdOutlineSocialDistance } from "react-icons/md";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { PiGooglePhotosLogoLight } from "react-icons/pi";
import { PiVideoLight } from "react-icons/pi";

import image1 from "../assets/Image (1).png";
import image2 from "../assets/Image (2).png";
import image3 from "../assets/Image (3).png";
import image4 from "../assets/Image (4).png";
import image5 from "../assets/Image (5).png";
import image6 from "../assets/Image (6).png";
import image7 from "../assets/Image (7).png";
import image8 from "../assets/Image (8).png";
import image9 from "../assets/Image (9).png";

import star from "../assets/Shape.svg";
import user from "../assets/Ellipse 74.svg";
import user1 from "../assets/Ellipse 74 (1).svg";
import user2 from "../assets/Ellipse 74 (2).svg";

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
    number: "100+",
    text: "Satisfied clients",
  },
  {
    id: 2,
    number: "150+",
    text: "Reviews given",
  },
  {
    id: 1,
    number: "200+",
    text: "Projects completed",
  },
];

export const services2 = [
  {
    id: 1,
    icon: <MdGraphicEq />,
    title: "Graphic Design",
    text: "We provide Graphic Design services, with the best designers",
  },
  {
    id: 2,
    icon: <FiLayers />,
    title: "UI/UX Designe",
    text: "We provide UI/UX Design services, and of course with the best quality",
  },
  {
    id: 3,
    icon: <MdOutlineSocialDistance />,
    title: "Social Media Marketing",
    text: "We provide Social Media Marketing services, with the best Marketers",
  },
  {
    id: 4,
    icon: <MdAutoAwesomeMotion />,
    title: "Motion Graphic",
    text: "Create a platform with the best and coolest quality from us.",
  },
  {
    id: 5,
    icon: <PiGooglePhotosLogoLight />,
    title: "Photography",
    text: "We provide Photography services, and of course with the best quality",
  },
  {
    id: 2,
    icon: <PiVideoLight />,
    title: "Videography",
    text: "Create a platform with the best and coolest quality from us.",
  },
];

export const testimonails = [
  {
    id: 1,
    star: star,
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    user: user,
    name: "Amir Uddin",
    position: "UX Designer ",
  },
];

export {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
};
