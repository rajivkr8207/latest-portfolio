import article from "../article.png";
import ecommerce from "../ecomerce.png";
const projectdata = [
  {
    id: 1,
    image: article,
    title: "Article-Management-System",
    type: "Full stack Project using Django",
    description:
      "This is a full-stack web application that allows users to register, log in, and perform various actions such as posting articles, viewing articles, deleting their own articles, updating their profiles, and viewing other user profiles. The backend is built using Django and Django REST Framework, while the frontend can be developed using React.js.",
    features: [
      {
        id: 1,
        point: "Register, login, and logout securely using JWT token.",
      },
      {
        id: 2,
        point:
          "Update and view profiles, including bio, occupation, and profile image.",
      },
      {
        id: 3,
        point:
          "Create, update, and delete your own articles with a title, description, and optional image.",
      },
      {
        id: 4,
        point: "View all articles posted by users.",
      },
      {
        id: 5,
        point: "Check the author's profile directly from an article.",
      },
    ],
    technologies: [
      {
        id: 1,
        point: "React.js with Tailwind CSS use in Frontend",
      },
      {
        id: 2,
        point: "Django REST Framework",
      },
      {
        id: 3,
        point: "Django Media Files for handling image uploads",
      },
      {
        id: 4,
        point: "SQLite for database",
      },
    ],
    usage: [
      {
        id: 1,
        point: "Register a new user or log in using an existing account.",
      },
      {
        id: 2,
        point: "Post articles with a title, description, and optional image.",
      },
      {
        id: 3,
        point: "Browse and read articles.",
      },
      {
        id: 4,
        point:
          "Update your profile with bio, occupation, and a profile picture.",
      },
      {
        id: 5,
        point: "Search for other user profiles and view their articles.",
      },
    ],
    github: "https://github.com/rajivkr8207/Article-Management-System",
  },
  {
    id: 2,
    image: ecommerce,
    title: "E-commerce",
    type: "Frontend Project using Vite.js",
    description:
      "Component Mitra is an e-commerce web application that allows users to browse and purchase products. The platform is built with React.js and provides features like adding products to the cart, removing them, and managing the cart items effectively. This project uses Context API for state management and includes features like local storage persistence and toast notifications for user interactions.",
    features: [
      {
        id: 1,
        point: "Browse products and view details.",
      },
      {
        id: 2,
        point: "Add products to the cart and manage cart items.",
      },
      {
        id: 3,
        point: "Remove individual items or clear the entire cart.",
      },
      {
        id: 4,
        point: "Toast notifications for adding/removing items.",
      },
      {
        id: 5,
        point: "Responsive design for various screen sizes.",
      },
    ],
    technologies: [
      {
        id: 1,
        point: "React.js with Tailwind CSS use in Frontend",
      },
    ],
    usage: [
      {
        id: 1,
        point:
          "Users can explore a wide range of products, filter them by category, and search for specific items based on keywords.",
      },
      {
        id: 2,
        point:
          "Users can add products to their cart, increase or decrease quantities, and remove items as needed.",
      },
      {
        id: 3,
        point:
          "The cart data is saved using local storage, ensuring that items remain in the cart even after a page refresh.",
      },
      {
        id: 4,
        point:
          "Toast notifications provide instant feedback when items are added or removed from the cart.",
      },
      {
        id: 5,
        point:
          "The platform is fully responsive, allowing users to shop seamlessly on desktops, tablets, and mobile devices.",
      },
    ],
    github: "https://github.com/rajivkr8207/ComponentMitra",
    site: "https://component-mitra.netlify.app/",
  },
];
export default projectdata;
