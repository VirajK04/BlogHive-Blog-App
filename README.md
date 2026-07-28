# 📝 Modern React Blog Application

A full-featured, responsive Blog Application built with **React**, **Redux Toolkit**, **React Router**, **TinyMCE Rich Text Editor**, and **Appwrite** as the Backend-as-a-Service (BaaS).

---

## ✨ Features

- 🔐 **User Authentication**: Secure Signup, Login, and Logout using Appwrite Auth.
- 🛡️ **Protected Routes**: Custom authentication middleware (`AuthLayout`) to guard private pages.
- ✍️ **Rich Text Editor**: Integrated TinyMCE Editor for seamless blog writing and formatting.
- 🖼️ **Image & File Storage**: Upload, preview, and manage post cover images via Appwrite Buckets.
- 📝 **CRUD Operations**: Complete Create, Read, Update, and Delete capabilities for blog posts.
- ⚛️ **Global State Management**: Redux Toolkit for central state handling (User auth status, post states).
- 🎨 **Responsive UI**: Styled using **Tailwind CSS** for a clean, mobile-first design.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & `react-redux`
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Rich Text Editor**: [@tinymce/tinymce-react](https://www.tiny.cloud/)
- **Backend as a Service (BaaS)**: [Appwrite](https://appwrite.io/) (Authentication, Databases, Buckets)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## 📁 Project Structure

```
Blog/
├── public/              # Static assets
├── src/
│   ├── appwrite/        # Appwrite client configuration (auth service & database service)
│   ├── assets/          # Project assets (images, icons)
│   ├── components/      # Reusable UI components & Form elements
│   │   ├── Footer/      # Footer component
│   │   ├── Header/      # Header component & Logout button
│   │   ├── container/   # Container wrapper
│   │   ├── post-form/   # Post Form component for creating & editing posts
│   │   ├── AuthLayout.jsx # Route protection wrapper
│   │   ├── RTE.jsx       # TinyMCE Rich Text Editor wrapper
│   │   └── ...
│   ├── conf/            # Environment variable configuration wrapper
│   ├── pages/           # Application pages (Home, Login, Signup, AllPosts, AddPost, EditPost, Post)
│   ├── store/           # Redux store and slices (authSlice)
│   ├── App.jsx          # Root App component
│   └── main.jsx         # Application entry point with React Router provider
├── .env.sample          # Environment variables template
├── package.json         # Project dependencies & scripts
└── vite.config.js       # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An active [Appwrite](https://appwrite.io/) account and project instance.

### 1. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/VirajK04/Blog-App.git
cd Blog
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory based on `.env.sample`:

```bash
cp .env.sample .env
```

Populate the `.env` file with your Appwrite project configuration credentials:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your_project_id"
VITE_APPWRITE_DATABASE_ID="your_database_id"
VITE_APPWRITE_COLLECTION_ID="your_collection_id"
VITE_APPWRITE_BUCKET_ID="your_bucket_id"
```

### 3. Running the Application

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080/` (or the port indicated in your console).

---

## 📜 Available Scripts

- `npm run dev`: Runs the app in development mode using Vite.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check for code quality and errors.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the issues page.