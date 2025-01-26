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

//

import PGL from "../assets/experience/PGL.PNG";
import Ulearna from "../assets/experience/Ulearna.jpg";
import MOby from "../assets/experience/Mo.jpg";
import M from "../assets/experience/M.JPG";
import PGT from "../assets/experience/PGT.PNG";
import Pivotal from "../assets/experience/Piovtal.jpg";
import Q from "../assets/experience/Q.JPG";
import TGL from "../assets/experience/TGL.WEBP";
import FOREX from "../assets/experience/fOREX.JPG";
import Ayenda from "../assets/experience/Ayenda.svg";

export const links = [
  {
    id: 1,
    text: "Home",
    url: "home",
    icon: <IoHomeOutline />,
  },
  {
    id: 2,
    text: "About",
    url: "about",
    icon: <LuScrollText />,
  },
  {
    id: 3,
    text: "Services",
    url: "services",
    icon: <GrServices />,
  },
  {
    id: 4,
    text: "Projects",
    url: "projects",
    icon: <BsCalendar2Plus />,
  },
  {
    id: 5,
    text: "Testimonails",
    url: "testimonails",
    icon: <BiCommentCheck />,
  },
  {
    id: 6,
    text: "Contact",
    url: "contact",
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
    company: "PIVOTAL-B2B MEDIA 202",
    text: "I have honed my skills over the course of one year, contributing to the company's visual identity and brand presence. My responsibilities include creating engaging and innovative designs for various B2B marketing materials.",
    user: Pivotal,
    name: "PIVOTAL",
    position: "CREATIVE GRAPHIC DESIGNER",
  },
  {
    id: 2,
    company: "ULEARNA.COM 2023 | 2022",
    text: "Transformed learning materials with captivating graphics, boosting user engagement by %20. Designed promotional graphics, resulting in a %15 increase in social media engagement. ",
    user: Ulearna,
    name: "Ulearna",
    position: "CREATIVE GRAPHIC DESIGNER",
  },
  {
    id: 3,
    company: "MOBAY GROUP2024 | 2023",
    text: "As a Freelance Graphic Designer at Mobey Group for six months, I collaborated directly with clients to fulfill their design requirements, focusing on creating compelling marketing materials, conceptualizing branding elements.",
    user: MOby,
    name: "MOBY",
    position: "FREELANCER GRAPHIC DESIGNER",
  },
  {
    id: 4,
    company: "PEACE GLOBAL LOGISTICS 2024..",
    text: "In my role as Head of Design at Peace Global Logistics, I led the strategic direction of the brand's visual identity and internal branding initiatives. My responsibilities encompassed leveraging motion design.",
    user: PGL,
    name: "PGL",
    position: "HEAD OF DESIGNER",
  },
  {
    id: 5,
    company: "TGL SUPLISE 2024...",
    text: "As a Creative Graphic Designer at TGL Supplies, I played a pivotal role in enhancing the visual presence and brand identity of the organization. My responsibilities included conceptualizing and designing a wide range of marketing materials.",
    user: TGL,
    name: "TGL",
    position: "CREATIVE GRAPHIC DESIGNER",
  },
  {
    id: 6,
    company: "PGT TEACH 2024",
    text: "As a Creative Graphic Designer at PGT, I contributed to the visual identity and marketing efforts of the organization through innovative design solutions. I collaborated with teams to create compelling graphicsthat.",
    user: PGT,
    name: "PGT",
    position: "CREATIVE GRAPHIC DESIGNER",
  },
  {
    id: 7,
    company: "MISGARAN 2024 | 2024",
    text: "As a Creative Graphic Designer at Misgaran, I specialized in crafting innovative visual solutions for branding and marketing initiatives. I collaborated closely with teams to ensure designs aligned with strategic goals.",
    user: M,
    name: "MISGARAN",
    position: "CREATIVE GRAPHIC DESIGNER",
  },
  {
    id: 8,
    company: "Ayenda Consulting 2025",
    text: "As the founder and graphic designer of Ayendah Consultancy, I lead the creation of innovative and impactful designs that represent our vision, delivering tailored solutions to effectively communicate ideas and drive success for our clients.",
    user: Ayenda,
    name: "AYENDA",
    position: "CREATIVE GRAPHIC DESIGNER",
  },
  {
    id: 9,
    company: "QAMAR FOUNDATION",
    text: "As a graphic designer at Qamar Foundation, I create impactful visuals that align with the foundation’s mission, enhancing its identity and inspiring positive change through creative designs for digital and print platforms.",
    user: Q,
    name: "Qamar",
    position: "CREATIVE GRAPHIC DESIGNER",
  },
  {
    id: 10,
    company: "Forex",
    text: "As a Creative Graphic Designer at Misgaran, I specialized in crafting innovative visual solutions for branding and marketing initiatives. I collaborated closely with teams to ensure designs aligned with strategic goals.",
    user: FOREX,
    name: "FOREX",
    position: "CREATIVE GRAPHIC DESIGNER",
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
