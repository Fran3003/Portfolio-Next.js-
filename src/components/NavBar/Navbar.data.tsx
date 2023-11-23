import {  RiAccountPinBoxFill  } from "react-icons/ri"
import { FaFileCode, FaHome  } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";

export const dataNavbar = [
    {
        name: "home",
        path: "/",
        icon: <FaHome  size="30" />
    },
    {
        name: "about",
        path: "/about",
        icon: <RiAccountPinBoxFill  size="30" />
    },
    {
        name: "technologies",
        path: "/technologies",
        icon: <FaFileCode size="30" />
    },
    {
        name: "projects",
        path: "/Projects",
        icon: <MdOutlineWork size="30" />
    },
    {
        name: "certificates",
        path: "/certificates",
        icon: <PiCertificateFill size="30" />
    }
]