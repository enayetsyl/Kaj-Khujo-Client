# Kaj Khujo

**Kaj Khujo** is a job listing and application web application that allows users to post job listings, apply for jobs, and manage their job applications. The platform includes authentication, job searching, job posting, and application tracking.

## Features

- 🏢 **Job Listings** – View all available jobs with filtering options.
- 📝 **Job Posting** – Users can post jobs, specifying salary, deadlines, and categories.
- 🔍 **Job Search** – Search and filter jobs based on different criteria.
- 🚀 **Job Applications** – Apply to jobs and track applications.
- 🛡 **Authentication** – Secure login and registration with Firebase authentication.
- 🗄 **Admin Features** – Update and delete job postings.
- 📄 **PDF Generation** – Download applied jobs as a PDF report.

---

## 📌 Technologies Used

### **Frontend**
- React.js
- Vite
- React Router
- Tailwind CSS
- Firebase Authentication
- Axios
- Framer Motion
- React Table
- SweetAlert
- React-to-PDF

### **Backend**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Dotenv
- Cookie-parser
- CORS

---

## 🔧 Installation & Setup

### **Backend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/enayetsyl/kaj-khujo-server.git
   ```
2. Navigate to the server folder:
   ```sh
   cd kaj-khujo-server
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add:
   ```env
   PORT=5000
   DB_USER=your_mongodb_user
   DB_PASS=your_mongodb_password
   ACCESS_TOKEN_SECRET=your_jwt_secret
   ```
5. Start the backend server:
   ```sh
   npm start
   ```
6. Server runs on `http://localhost:5000`

---

### **Frontend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/kaj-khujo-client.git
   ```
2. Navigate to the client folder:
   ```sh
   cd kaj-khujo-client
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Frontend runs on `http://localhost:5173`

---

## 🛠 API Endpoints

### **Authentication**
| Method | Endpoint        | Description                |
|--------|----------------|----------------------------|
| `POST` | `/jwt`         | Generate JWT token        |
| `POST` | `/logout`      | Log out user              |

### **Jobs**
| Method | Endpoint                 | Description                              |
|--------|---------------------------|------------------------------------------|
| `GET`  | `/api/v1/jobs`            | Get all jobs                            |
| `GET`  | `/api/v1/jobs/:id`        | Get job details                         |
| `GET`  | `/api/v1/tabJobs?category=X` | Get jobs filtered by category       |
| `POST` | `/api/v1/addjob`          | Add a new job (Protected Route)         |
| `PUT`  | `/api/v1/updatejob/:id`   | Update a job (Protected Route)          |
| `DELETE` | `/api/v1/jobs/delete/:id` | Delete a job (Protected Route)       |

### **Applications**
| Method | Endpoint                        | Description                             |
|--------|----------------------------------|-----------------------------------------|
| `GET`  | `/api/v1/myappliedjobs?userName=X` | Get applied jobs for a user          |
| `POST` | `/api/v1/appliedJob`            | Apply for a job                        |

---

## 🔐 Authentication & Security
- Firebase authentication for login and registration.
- JWT authentication for backend API protection.
- `verifyToken` middleware secures job posting and editing.

---

## 📂 Project Structure

### **Frontend (`kaj-khujo-client`)**
```
📂 src
 ├── 📁 Components
 ├── 📁 Pages
 ├── 📁 Layout
 ├── 📁 Router
 ├── 📁 Provider
 ├── index.css
 ├── main.jsx
 └── App.jsx
```

### **Backend (`kaj-khujo-server`)**
```
📂 server
 ├── index.js
 ├── 📂 routes
 ├── 📂 middleware
 ├── 📂 config
 ├── 📂 models
 ├── package.json
 └── .env
```

---

## 🚀 Deployment
- **Frontend** deployed on **Firebase Hosting**.
- **Backend** deployed on **Vercel**.

---

## 🙌 Contributions
Feel free to contribute to this project by opening issues or submitting pull requests.

---
## 🏆 **Author:** Md Enayetur Rahman

### Contact Information
- [LinkedIn](https://www.linkedin.com/in/md-enayetur-rahman/)
- [Facebook](https://www.facebook.com/profile.php?id=100094416483981)
- [X (Twitter)](https://x.com/enayetu_syl)
- [YouTube](https://www.youtube.com/@MdEnayeturRahman)
- [GitHub](https://github.com/enayetsyl/)
- [Medium](https://medium.com/@enayetflweb)
- [dev.to](https://dev.to/md_enayeturrahman_2560e3)
- [Leetcode](https://leetcode.com/u/XTl7hvNPIc/)
- [Hackerrank](https://www.hackerrank.com/profile/enayetflweb)
- [Codeforces](https://codeforces.com/profile/enayetsyl)
- [Email](mailto:enayetflweb@gmail.com)

