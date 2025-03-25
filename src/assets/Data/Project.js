import article from "../projectpic/article.webp";
import tasksphere from '../projectpic/tasksphere.webp'
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
    image: tasksphere,
    title: "Tasksphere",
    type: "Frontend Project using Vite+typescript",
    description:
      "TaskSphere is a multi-utility web app built with Vite.js, TypeScript, and Tailwind CSS, offering task management, weather updates, and expense tracking.",
    features: [
      {
        id: 1,
        point: "✅ To-Do App – Task management.",
      },
      {
        id: 2,
        point: "✅ Weather App – Real-time updates.",
      },
      {
        id: 3,
        point: "✅ Expense Tracker – Track income/expenses.",
      },
      {
        id: 4,
        point: "⏳ Calculator & Notepad – Coming soon.",
      }
    
    ],
    technologies: [
      {
        id: 1,
        point: "Vite.js, TypeScript, Tailwind CSS",
      },
      {
        id: 2,
        point: "React Router, LocalStorage, React Hooks",
      }
    ],
    usage: [
      {
        id: 1,
        point:
          "✅ Manage daily tasks with the To-Do App.",
      },
      {
        id: 2,
        point:
          "🌦️ Get real-time weather updates.",
      },
      {
        id: 3,
        point:
          "💸 Track income and expenses efficiently..",
      },
      {
        id: 4,
        point:
          "⏳ Perform quick calculations (coming soon)..",
      },
      {
        id: 5,
        point:
          "📝 Save and manage notes (coming soon).",
      },
    ],
    github: "https://github.com/rajivkr8207/TaskSphere",
    site: "https://rj-tasksphere.netlify.app/",
  },
];
export default projectdata;
