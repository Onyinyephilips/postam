import { customer1, customer2, customer3} from "../assets/images";
import { slideImage1, slideImage2, slideImage3 } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/legal", label: "Policy" },
    { href: "/faq", label: "FAQs" },
    { href: "/about", label: "About Us" },
];


export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", link: "/" },
            { name: "About Us", link: "/about" },
            { name: "Contact Us", link: "/contact" },
            { name: "FAQ", link: "/faq" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Terms and Conditions", link: "/legal/#terms" },
            { name: "Privacy policy", link: "/legal/#privacy" },

        ],
    },
];
export const footerContact = [{
        title: "Contact Details",
        links: [
            { name: "Email: support@getpostam.com", link: "mailto:support@getpostam.com" },
            { name: "Phone: +234 890 3823 123", link: "tel:+2348903823123" },
            { name: "Address: 456 Dro Street, Connect City, TX", link: "/" },
        ],
    },

];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Emily Johnson',
        feedback: "Postam has quickly become my favorite app for fun and entertainment. I use it to stream shows, discover new music, and even connect with people who enjoy the same things I do. It really feels like a little world of its own, and I love it."
    },
    {
        imgURL: customer2,
        customerName: 'Michael Anderson',
        feedback: "Postam is the convenience I never knew I needed. I love that I do not have to jump between different apps anymore. From watching the latest movies to ordering food and staying connected with friends, everything is right here. It is simple, easy to use, and it saves me so much time."
    },
    {
        imgURL: customer3,
        customerName: 'Sophia Martinez',
        feedback: "What I love most about Postam is the sense of community. I have met amazing people through niche groups and local meetups who share the same passions I do. It feels welcoming, not just like another app."
    },
    {
        imgURL: customer2,
        customerName: 'Michael Anderson',
        feedback: "Postam has made life so much more fun! I love how I can discover new things every day. Whether it is entertainment, food recommendations, or even local events, Postam always has something fresh and fun. It is like an adventure in an app."
    },
    {
        imgURL: customer3,
        customerName: 'Olivia Wilson',
        feedback: "Highly recommended for anyone wanting more convenience. Postam combines everything I love: streaming, shopping, and community engagement. I even deleted a bunch of other apps because Postam does it all. If you want more convenience in your everyday life, I truly recommend it."
    },
    
    {
        imgURL: customer2,
        customerName: 'Smitt Merit',
        feedback: "Postam adds excitement to my everyday life! I’m constantly finding something new, whether it’s a cool movie to watch, a hidden gem of a restaurant, or a fun event happening nearby. It’s like having a personal guide to the best stuff around. I never know what I’ll discover next!"
    },
    
];

export const trending = [
    {
        title: "Trending",
        hashtag: '#Internationaldanceshow',
        postcount: "360k Posts",
        top: "01",
    },
    {
        title: "Trending",
        hashtag: '#Internationaldanceshow',
        postcount: "360k Posts",
        top: "02",
    },
    {
        title: "Trending",
        hashtag: '#Internationaldanceshow',
        postcount: "360k Posts",
        top: "03",
    },
    {
        title: "Trending",
        hashtag: '#Internationaldanceshow',
        postcount: "360k Posts",
        top: "04",
    },
    {
        title: "Trending",
        hashtag: '#Internationaldanceshow',
        postcount: "360k Posts",
        top: "05",
    },
    {
        title: "Trending",
        hashtag: '#Blockchainban',
        postcount: "360k Posts",
        top: "06",
    },
    
];

export const slides = [
  {
    id: "01",
    title: "Convenience",
    description: "Postam allows you to watch content you enjoy, shop for must-have products, and pay your bills— all in one app. It’s like having a personal assistant in your pocket.",
    imgURL: slideImage1,
  },
  {
    id: "02",
    title: "Efficiency",
    description: "Our user-friendly design makes it easy to find what you're looking for, whether you’re diving into entertainment or browsing the marketplace.",
    imgURL: slideImage2,
  },
  {
    id: "03",
    title: "Safe and Secure",
    description: "With Postam, you can rest assured knowing that your payments and personal information are protected.",
    imgURL: slideImage3,
  },
];