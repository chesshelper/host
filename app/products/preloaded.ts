import { ColorSchemeType } from "../schemas/schemas";

export interface Product {
  logoSrc: string;
  title: string;
  desc: string;
  id: string;
  alias: string;
  version?: string;
  colorScheme?: ColorSchemeType;
  details: ProductDetails,
  productType: ProductType,
}


export type ProductType = "EXTENSION" | "APPLICATION" | "GITHUB";

type Browsers = "FIREFOX" | "CHROME" | "EDGE";

export type ProductLinks = {
  FIREFOX?: string,
  CHROME?: string,
  EDGE?: string,
  GITHUB?: string,
  APPSTORE?: string,
  PLAYMARKET?:string
}

export type ProductBrowserLinks = Pick<ProductLinks, Browsers>;


export type ProductDetails = {
  id?: string,
  links: ProductLinks,
  stats?: Stats,
  preview_features?: PrevFeature[],
  preview_reviews?: PrevReview[],
  slides_count?: number,
  available_slides_locales?: string[],
}

export type Stats = {
  users: number;
  reviews: number;
  rating: number;
}

export type PrevFeature = {
  icon: string,
  title: string,
  description: string
}

export type PrevReview = {
  avatarUrl: string,
  author: string,
  description: string
}



export const products: Product[] = [
  {
    id: "0ff399d2-9a1c-46c3-83ba-295989873",
    logoSrc: "/images/logos/igp.svg",
    alias: "IGPLUS",
    title: "IGPlus",
    version: "3.0.1 Stable",
    desc: "Disable Instagram Reels, hide Stories, recommendations  comments, trends, and other unnecessary elements, allowing you to focus on...",
    colorScheme: "PURPLE",
    productType: "EXTENSION",
    details: {
      links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      stats: {
        users: 10000,
        reviews: 680,
        rating: 4.9
      },
      preview_features: [
        { title: 'Hide <br>Explore Page', icon: '🔍', description: 'Turn off the Explore page to focus only on the content that matters to you.' },
        { title: 'Hide <br>Recommendations', icon: '🎯', description: 'See only content from accounts you follow - no more unwanted suggestions.' },
        { title: 'Personalize <br>Fonts', icon: '🔠', description: 'Choose from various fonts like Montserrat, Poppins, and more to suit your style.' },
        { title: 'Customize <br>Notifications', icon: '✉️', description: 'Grayscale or disable the new message counter to reduce distractions.' },
        { title: 'Disable <br>Reels & Videos', icon: '🎥', description: 'Disable Reels and video content for a cleaner, distraction-free experience.' },
        { title: 'Hide Like <br>& Follower Counts', icon: '❤️', description: 'Make Instagram a more mindful space by hiding likes and follower numbers.' },
      ],      
      preview_reviews: [
           { author: 'ZachHere', avatarUrl: '/images/pfp/1.jpg', description:'Very good extension. I like the ability to grayscale. One feature that would make this extension better would be the ability to disable suggested posts from the main page. They are very bothering for me'},
           { author: 'Barbora Viski', avatarUrl: '/images/pfp/2.jpg', description:'Hate falling into the shortform content trap.<br> Love the apps that allow me to forget it exists.'},
           { author: 'Cristiano Nunes', avatarUrl: '/images/pfp/3.jpg', description:'This extension is incredibly useful! It has significantly improved my productivity by removing unnecessary distractions, helping focus on what truly matters.'},
           { author: 'Akram Mohamed', avatarUrl: '/images/pfp/4.jpg', description:'Very good extension. The best and most affective one! Love all the features! Would request a similar for youtube as well'},
           { author: 'Martin Hublar', avatarUrl: '/images/pfp/5.jpg', description:'It really is an time saver, it is especially good for those people who drift off to reels section from message section unconsciously.'},
           { author: 'Cailan Wiat', avatarUrl: '/images/pfp/6.jpg', description:"This extension was a perfect investment for me, i have instagram for its intended inspiration purpose and that's it i never spend more than 30 mins a week on the app and i don't have to battle the need to be on it anymore its incredible."},
      ],
      slides_count: 7,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "f702edcb-b036-4b2e-ab75-f11e42f1ddab",
    alias: "MEMENTO",
    logoSrc: "/images/logos/memento.svg",
    title: "Memento.",
    desc: "Customizable start page extension for your browser. Open-source, lightweight, and secure, Memento enhances your browsing experience with intuitive customization and a clean design.",
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      stats: {
        users: 220,
        reviews: 10,
        rating: 4.9
      },
      preview_features: [
        { title: 'Customizable <br>Backgrounds', icon: '🖼️', description: 'Choose high-quality Unsplash images, upload your own, or keep it minimal with a plain background.' },
        { title: 'Visual <br>Controls', icon: '🎛️', description: 'Adjust blur, clock size, and brightness settings to match your aesthetic.' },
        { title: 'Localized <br>Experience', icon: '🌍', description: 'Supports 12 languages and both 12-hour and 24-hour clock formats for a personalized experience.' },
        { title: 'Secure & <br>Open-Source', icon: '🔒', description: 'Memento is open-source, ensuring transparency and privacy with no data tracking.' },
        { title: 'Fast & <br>Lightweight', icon: '⚡', description: 'Designed for speed and efficiency, keeping your new tab smooth and distraction-free.' },
      ],          
      slides_count: 3,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "815f5b7f-bcd5-43f4-a5c8-6e4e95fb3fc8",
    alias: "CHESSHELPER",
    logoSrc: "/images/logos/ch.svg",
    title: "ChessHelper",
    desc: "Chess.com extension that adds new themes, pieces, boards, fonts, and features such as disabling popups,  coordinates on each square...",
    productType: "EXTENSION",
    colorScheme: "PURPLE",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      preview_features: [
        { title: 'Custom <br>Themes & Pieces', icon: '🎨', description: 'Change Chess.com’s look with 6 themes, 39 pieces, and 40 boards.', },
        { title: 'Fullscreen & <br>Fixed Mode', icon: '📺', description: 'Enjoy fullscreen mode and a fixed board layout. No more jumping in HyperBullet!', },
        { title: 'Bandwidth <br>Saver', icon: '📉', description: 'Reduce bandwidth usage by disabling the main page stream.', },
        { title: 'Disable <br>Chat', icon: '💬', description: 'No more trolls! Focus on the game without distractions.', },
        { title: 'Coordinates <br>on Each Square', icon: '♟️', description: 'Learn chess notation faster with coordinates on every square.', },
        { title: 'Double Click <br>Resign', icon: '⚡', description: 'Resign quickly with a simple double-click. Less frustration, more control.', },
      ],      
      slides_count: 5,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "6565a677-5e79-4ed2-9cd4-b8f1b15ed",
    logoSrc: "/images/logos/sp.svg",
    alias: "SPOPLUS",
    title: "SpoPlus for Spotify",
    version: "2.6.1 Stable",
    desc: 'Hide Spotify "Now Playing" View, bring back classic heart button, disable albums, change themes, fonts, disable videos to reduce bandwidth usage... ',
    colorScheme: "MAIN",
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      preview_features: [
        { title: 'Bring Back <br>Classic Heart Button', icon: '❤️', description: 'Bring back the old heart button for a nostalgic and familiar experience.' },
        { title: 'Focus <br>Mode', icon: '🎧', description: 'Enable a compact and distraction-free interface for a more immersive listening experience.' },
        { title: 'Custom <br>Themes & Fonts', icon: '🎨', description: 'Choose from various themes and fonts to personalize your Spotify experience.' },
        { title: 'Albums <br>Styling', icon: '🎵', description: 'Transform album covers into a sleek rectangular design for a modern look.' },
        { title: 'Hide <br>"Now Playing View"', icon: '🗂️', description: 'Disable the "Now Playing" section to simplify the interface and stay focused.' },
        { title: 'Block <br>Images & Videos', icon: '🚀', description: 'Reduce bandwidth usage by disabling images and videos while streaming music.' },
    ],
    preview_reviews: [
      { author: 'Xavier Wakefield', avatarUrl: '/images/pfp/12.jpg', description:'This is most definitely one of the best extensions to get for Spotify, one thing I love about this extension the most, is the simple but highly effective change in instead of having the plus sign, you can change it back to the classic heart button. But even without that, the UI options are definitely very useful.'},
      { author: 'Rubysama Marag', avatarUrl: '/images/pfp/10.jpg', description:'This reduced my RAM usage with Spotify. The interface is looking clean too, great job!'},
      { author: 'Mykaela Ramnani', avatarUrl: '/images/pfp/9.jpg', description:"I think the extension does what it needs to do. For being the seemingly only customization extension for spotify it works and has a good color selection. Works fine as day and totaly worth to install."},
      { author: '무무moomoo', avatarUrl: '/images/pfp/8.jpg', description:"adore this!!! was looking for a way to make spotify have a light mode for FOREVER and it acomplishes that and much more!!! 10/10 i can't wait for more ui features!!"},
      { author: 'Kshitij Das', avatarUrl: '/images/pfp/11.jpg', description:'Work pretty well. The themes are also soothing to the eyes, specially amoled one. But one suggestion, please add some more font options like Comic Sans, or like fancy ones. Thank you 😁'},
      { author: 'Sombra', avatarUrl: '/images/pfp/7.jpg', description:"Awesome!! No problems from it at all :) The themes are super cute and it's compatible with the other extensions I connect to Spotify ^_^ definitely recommend"}
    ],
      slides_count: 5,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "384cfb27-4606-4f38-bc9b-d608960c3cff",
    alias: "DOHABIT",
    logoSrc: "/images/logos/dh.svg",
    title: "DoHabit",
    desc: "Open-source habits tracker for both iOS and Android. Designed to help users stay consistent and improve their daily routine. It makes tracking and achieving progress easier and way more engaging.",
    productType: "APPLICATION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      slides_count: 6,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "c164beed-67c3-4b5a-86bb-41a5d9a95a4e",
    alias: "LICHESSHELPER",
    logoSrc: "/images/logos/lc.svg",
    title: "LichessHelper",
    desc: "Lichess.org extension that adds new themes, pieces, boards, fonts, and features such as disabling popups,  coordinates on each square...",
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      preview_features: [
        { title: 'Custom <br>Themes & Pieces', icon: '🎨', description: 'Change Lichess look with 6 themes, 39 pieces, and 40 boards.', },
        { title: 'Modern <br>Layout Mode', icon: '🖥️', description: 'Enjoy a sleek, modernized interface for an improved Lichess experience.' },
        { title: 'Fullscreen & <br>Fixed Mode', icon: '📺', description: 'Enjoy fullscreen mode and a fixed board layout. No more jumping in HyperBullet!', },
        { title: 'Disable <br>Chat', icon: '💬', description: 'No more trolls! Focus on the game without distractions.', },
        { title: 'Coordinates <br>on Each Square', icon: '♟️', description: 'Learn chess notation faster with coordinates on every square.', },
        { title: 'Prevent <br>Scrolling Moves', icon: '🛑', description: 'Stop accidental moves caused by scrolling, ideal for fast-paced games.' },
      ], 
      slides_count: 4,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "aef583ac-6948-45c6-acec-8db9171891be",
    alias: "EASYCALC",
    logoSrc: "/images/logos/ec.svg",
    title: "EasyCalc",
    desc: "A simple calculator extension for performing basic arithmetic calculations. EasyCalc's sleek and efficient design not only looks great but also maximizes usability.",
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      preview_features: [
        { title: 'Dark Mode <br>& Light Mode', icon: '🌗', description: 'Switch between dark and light modes for a comfortable and personalized experience.', },
        { title: 'Sleek <br>Design', icon: '✨', description: 'A clean and efficient interface that maximizes functionality without distractions.', },
        { title: 'Persistent <br>Value Storage', icon: '💾', description: 'Your values are saved until cleared, making it easy to reference past calculations.', },
        { title: 'Privacy-First <br>Approach', icon: '🔒', description: 'EasyCalc does not collect personal data, ensuring your security and peace of mind.', },
        { title: 'Open-Source <br>& Free', icon: '🛠️', description: 'Completely open-source on GitHub, allowing you to inspect, modify, and contribute.', },
      ],    
      slides_count: 3,
      available_slides_locales: ["en"]
    },
  },
  {
    id: "c9759454-5de4-4a45-8ba6-1c007738a43c",
    alias: "GWARDAAPP",
    logoSrc: "/images/logos/gw.svg",
    title: "GwardaApp",
    desc: "Discover Amazon product info, find best prices, leverage SEO keywords, locate top suppliers with Reverse ASIN. Access valuable insights into product performance, competition analysis for your e-commerce strategy.",
    productType: "EXTENSION",
    details: {
     links: {
        FIREFOX: "firefox-link",
        CHROME: "https://chromewebstore.google.com/detail/dbbopjndlaginbghfoibbndhlbpdpapd/",
        EDGE: "edge-link",
      },
      slides_count: 1,
      available_slides_locales: ["en"]
    },
  },
];

