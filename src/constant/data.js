export const nav = [
  {
    name: "Activty",
    icon: "fluent:data-trending-32-regular",
    link: "/",
  },
  {
    name: "Members",
    icon: "mynaui:users",
    link: "/members",
  },
  {
    name: "Groups",
    icon: "ph:users-four-thin",
    link: "/group",
  },
  {
    name: "Message",
    icon: "material-symbols:sms-outline-sharp",
    link: "/messeges",
  },
  { name: "Profile", icon: "weui:me-filled", link: "/profile" },
];

export const navbarNav = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop-list" },
  { name: "Blogs", link: "/blog-listing" },
  { name: "About", link: "/about-us" },
  { name: "Contact", link: "/contact-us" },
];

export const navbarBtnsIcon = [
  {
    icon: "uil:brightness",
  },
  {
    icon: "iconamoon:search-light",
  },

  {
    icon: "tabler:users",
  },
  {
    icon: "material-symbols:mail-outline",
  },
  {
    icon: "mingcute:notification-line",
    quanity: 3,
  },
  {
    icon: "solar:bag-outline",
  },
];

export const communityData = [
  {
    category: "Social",
    links: [
      { name: "Activity", link: "/activity" },
      { name: "Members", link: "/members" },
      { name: "Groups", link: "/groups" },
      { name: "Badges", link: "/badges" },
    ],
  },
  {
    category: "Profile",
    links: [
      { name: "Timeline", link: "/timeline" },
      { name: "About User", link: "/about-user" },
      { name: "User's Timeline", link: "/users-timeline" },
      { name: "User's Friends", link: "/users-friends" },
      { name: "User's Groups", link: "/users-groups" },
    ],
  },
  {
    category: "Forum",
    links: [
      { name: "All Forums", link: "/all-forums" },
      { name: "Forum Details", link: "/forum-details" },
      { name: "Topic Single", link: "/topic-single" },
    ],
  },
];

export const icons = [
  { name: "Timeline", icon: "fontisto:date" },
  { name: "About", icon: "mdi:account-outline" },
  { name: "Friends", icon: "mdi:account-group-outline" },
  { name: "Notifications", icon: "mdi:bell-outline" },
  { name: "Groups", icon: "mdi:account-multiple-outline" },
  { name: "Marketplace", icon: "mdi:store-outline" },
  { name: "Watch", icon: "mdi:play-circle-outline" },
  { name: "Memories", icon: "mdi:clock-outline" },
  { name: "Saved", icon: "mdi:bookmark-outline" },
  { name: "Pages", icon: "mdi:file-document-outline" },
];

import StoryPic1 from "../assets/img/Story1.png";
import StoryPic2 from "../assets/img/Story2.png";
import StoryPic3 from "../assets/img/Story3.png";
import StoryPic4 from "../assets/img/Story4.png";
import StoryPic5 from "../assets/img/Story5.png";
import StoryVedio1 from "../assets/img/StoryVedio1.mp4";
import StoryVedio2 from "../assets/img/StoryVedio2.mp4";
import Avatar from "../assets/img/Avatar.jpg";
export const stories = [
  {
    id: 1,
    name: "Felix Deo",
    authorImage: Avatar,
    type: "image",
    src: StoryPic1,
  },
  // {
  //   id: 2,
  //   name: "Jenny Wilson",
  //   authorImage: Avatar,
  //   type: "video",
  //   src: StoryVedio1,
  // },
  {
    id: 3,
    name: "Freya Davies",
    authorImage: Avatar,
    type: "image",
    src: StoryPic3,
  },
  {
    id: 4,
    name: "Robert Fox",
    authorImage: Avatar,
    type: "image",
    src: StoryPic4,
  },
  {
    id: 5,
    name: "Leslie Alexander",
    authorImage: Avatar,
    type: "image",
    src: StoryPic5,
  },
  {
    id: 6,
    name: "Felix Deo",
    authorImage: Avatar,
    type: "image",
    src: StoryPic1,
  },
  {
    id: 6,
    name: "Freya Davies",
    authorImage: Avatar,
    type: "image",
    src: StoryPic3,
  },
  // {
  //   id: 6,
  //   name: "Alexander Leslie",
  //   authorImage: "https://via.placeholder.com/50/ffbb7b/fff?text=L",
  //   type: "vedio",
  //   src: StoryVedio2,
  // },
];


import PostPic1 from "../assets/img/Story1.png";
import PostPic2 from "../assets/img/Story2.png";
import PostPic3 from "../assets/img/Story3.png";
import PostPic4 from "../assets/img/Story4.png";
import PostPic5 from "../assets/img/Story5.png";
import PostVedio1 from "../assets/img/StoryVedio1.mp4";
import PostVedio2 from "../assets/img/StoryVedio2.mp4";

export const posts = [
  {
    _id: 1,
    author: {
      name: "John Doe",
      profileImage: Avatar,
      headline: "Photographer | Nature Lover",
    },
    group: {
      profileImage: StoryPic2,
      name: "Photographer Nature Lover",
    },
    postTime: "2 hours ago",
    content: {
      text: "A beautiful day to explore nature! 🌿🌄",
      type: "image", // single image post
      media: [PostPic1],
    },
    likes: 120,
    comments: 34,
    shares: 12,
  },
  {
    _id: 2,
    author: {
      name: "Jane Doe",
      profileImage: StoryPic5,
      headline: "Videographer | Adventurer",
    },
    postTime: "1 hour ago",
    content: {
      text: "Enjoying the beauty of the mountains! 🎥🏞️",
      type: "video", // video post
      media: [PostVedio1],
    },
    likes: 150,
    comments: 45,
    shares: 8,
  },
  {
    _id: 3,
    author: {
      name: "John Doe",
      profileImage: StoryPic4,
      headline: "Photographer | Nature Lover",
    },
    postTime: "3 hours ago",
    content: {
      text: "Nature's beauty captured in these shots! 📸🌿",
      type: "collage", // multiple images post
      media: [PostPic3, PostPic4, PostPic5],
    },
    likes: 200,
    comments: 60,
    shares: 20,
  },
];
