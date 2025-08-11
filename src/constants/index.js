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
            { name: "Email: support@postam.com", link: "mailto:support@postam.com" },
            { name: "Phone: +234 890 3823 123", link: "tel:+2348903823123" },
            { name: "Address: 456 Dro Street, Connect City, TX", link: "/" },
        ],
    },

];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Emily Johnson',
        feedback: "Postam has become my go-to app for everything fun and exciting. From streaming shows to discovering new music and connecting with people who share my interests, its a one-stop entertainment hub. It feels like a mini world of its own!"
    },
    {
        imgURL: customer2,
        customerName: 'Michael Anderson',
        feedback: "The Convenience I Didn’t Know I Needed! With Postam, I no longer need multiple apps. Whether it’s catching up on the latest movies, ordering food, or staying in touch with my friends, I can do it all here. It’s so easy to use, and it saves me so much time!"
    },
    {
        imgURL: customer3,
        customerName: 'Sophia Martinez',
        feedback: "A Real Sense of Community Postam has helped me find a place where I belong. From niche communities to local meet-ups, I’ve met incredible people who share my passions. It’s not just an app; it’s a welcoming space for everyone!"
    },
    {
        imgURL: customer2,
        customerName: 'Michael Anderson',
        feedback: "Postam’s Made Life So Much More Fun! I love how I can discover new things every day. Whether it’s entertainment, food recommendations, or even local events, Postam always has something fresh and fun. It’s like an adventure in an app!"
    },
    {
        imgURL: customer3,
        customerName: 'Olivia Wilson',
        feedback: "Highly Recommend for Anyone Wanting More Convenience! Postam combines everything I love: streaming, shopping, and community engagement. I’ve deleted so many other apps because Postam has it all. Highly recommend it for anyone who values convenience ."
    },
    {
        imgURL: customer3,
        customerName: 'Olivia Wilson',
        feedback: "Highly Recommend for Anyone Wanting More Convenience! Postam combines everything I love: streaming, shopping, and community engagement. I’ve deleted so many other apps because Postam has it all. Highly recommend it for anyone who values convenience ."
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