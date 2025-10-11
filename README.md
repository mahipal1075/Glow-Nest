# ✨ Glow-Nest ✨

Glow-Nest is a full-stack web application project, featuring a modular architecture with separate directories for the backend API, a main project frontend, and an admin dashboard. This repository does not include a README file yet—this document provides an overview based on the current project structure.

## 🗂️ Project Structure

```
Glow-Nest/
├── Backend/   # Node.js/Express backend API
├── Project/   # Main frontend (React + Vite)
├── admin/     # Admin dashboard (React + Vite)
├── package.json
├── package-lock.json
└── .gitignore
```

### 🛠️ Backend

- **Location:** [`Backend/`](./Backend)
- **Stack:** Node.js, Express, MongoDB, Stripe, JWT, Multer, Mongoose, and related middleware.
- **Entry Point:** `server.js`
- **Key Directories:**
  - `controllers/`, `models/`, `routes/`, `middleware/`, `config/`
  - `uploads/` for file storage, `insertImage/` likely for image-related operations
- **Environment:** Requires `.env` file for secret keys and environment variables.

#### ⚙️ Main dependencies (see `Backend/package.json`):
- express, mongoose, mongodb, dotenv, bcrypt, jsonwebtoken, multer, stripe, cors, body-parser, validator

### 💻 Project (Main Frontend)

- **Location:** [`Project/`](./Project)
- **Stack:** React 19, Vite, React Router, Lucide icons, Axios
- **Scripts:** dev, build, lint, preview
- **Dependencies:** axios, lucide-react, react, react-dom, react-icons, react-router-dom

### 🛡️ Admin

- **Location:** [`admin/`](./admin)
- **Stack:** React 19, Vite, React Router, React Toastify
- **Scripts:** dev, build, lint, preview
- **Dependencies:** axios, lucide-react, react, react-dom, react-router-dom, react-toastify

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (check version compatibility in each `package.json`)
- MongoDB (for backend API)

### 📝 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/mahipal1075/Glow-Nest.git
   cd Glow-Nest
   ```

2. **Install dependencies for each part:**

   - **Backend:**
     ```sh
     cd Backend
     npm install
     ```
   - **Project frontend:**
     ```sh
     cd ../Project
     npm install
     ```
   - **Admin dashboard:**
     ```sh
     cd ../admin
     npm install
     ```

3. **Setup environment variables**
   - Create a `.env` file in `Backend/` with the required environment variables (see code for details).

4. **Run the applications:**
   - **Backend:**
     ```sh
     cd Backend
     npm run server
     ```
   - **Frontend (Project):**
     ```sh
     cd ../Project
     npm run dev
     ```
   - **Admin dashboard:**
     ```sh
     cd ../admin
     npm run dev
     ```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the ISC License.

---

*Note: Please update this README with more project-specific details and usage instructions as the project evolves.*
