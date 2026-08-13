import type { IconType } from "react-icons";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";

interface Social {
  name: string;
  handle: string;
  url: string;
  icon: IconType;
}

export const socials = [
  {
    name: "GitHub",
    handle: "muhfees",
    url: "https://github.com/muhfees",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    handle: "muhfees-rahman",
    url: "https://www.linkedin.com/in/muhfees-rahman-88a332353/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    handle: "muhfeez_11",
    url: "https://www.instagram.com/muhfeez_11/",
    icon: FaInstagram,
  },
  {
    name: "X",
    handle: "Muhfees11",
    url: "https://x.com/Muhfees11",
    icon: FaXTwitter,
  },
  {
    name: "LeetCode",
    handle: "Muhfees",
    url: "https://leetcode.com/u/Muhfees/",
    icon: SiLeetcode,
  },
  {
    name: "Facebook",
    handle: "Muhfees",
    url: "https://facebook.com/muhfees",
    icon: FaFacebook,
  },
  {
    name: "Snapchat",
    handle: "muhfeez_11",
    url: "https://snapchat.com/add/",
    icon: FaSnapchat,
  },
  {
    name: "Telegram",
    handle: "Muhfees",
    url: "https://t.me/",
    icon: FaTelegram,
  },
] satisfies Social[];
