# ISP Management System

A web-based platform for managing ISP users, internet packages, and interacting with MikroTik routers via API.

---

## 📆 Project Details

- **Name:** `isp-management-system`  
- **Version:** `0.1.0`  
- **Framework:** [Next.js](https://nextjs.org/) with Turbopack  
- **Language:** TypeScript  
- **Styling:** TailwindCSS  
- **Database:** Prisma ORM  
- **Deployment:** Docker support included

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anonto42/ISP-Management-System.git
cd ISP-Management-System
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Rename the `.env.sample` file to `.env` and update the values as needed.

### 4. Start Development Server

```bash
npm run dev
```

---

## 🛣️ Run with Docker Compose

You can also run the app using Docker Compose:

```bash
docker compose up
```

Make sure Docker is installed and running on your machine.

---

## 🔐 Admin Login (for Testing)

> **Important:** This is a default development credential. Please change it before production.

- **Email:** `admin`  
- **Password:** `admin`

---

## ⚠️ MikroTik Integration Notes

This system supports advanced integration with MikroTik routers. Some core features **will not function** unless MikroTik is connected and configured properly:

- Creating users from the dashboard  
- Viewing real-time connected users  
- Fetching internet speed plans from MikroTik  
- Creating MikroTik-based internet packages

### 🔧 MikroTik Configuration Steps

1. Assign a static IP to the MikroTik device for API access  
2. Enable the **API service** in MikroTik  
3. Connect MikroTik from the `/settings/config` page  
4. (Optional) You can simulate MikroTik in development using **VirtualBox**

---

## 📜 NPM Scripts

| Command        | Description                                               |
|----------------|-----------------------------------------------------------|
| `npm run dev`  | Start development server with Turbopack                   |
| `npm run build`| Generate Prisma client, push DB, and build Next.js app   |
| `npm run start`| Start production server                                   |
| `npm run lint` | Run ESLint to check for code issues                       |

---

## 🛠️ Dependencies Overview

- **Core:** `next`, `react`, `prisma`, `typescript`, `tailwindcss`
- **MikroTik API:** `routeros-client`
- **Utilities:** `axios`, `cloudinary`, `twilio`, `bcryptjs`, `jose`, `date`, `source-map-support`, `streamifier`
- **UI & Charts:** `react-icons`, `react-toastify`, `react-loader-spinner`, `recharts`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repository and submit a pull request.

---

## 👨‍💻 Author

**Md Sohidul Islam Ananto**  
GitHub: [@anonto42](https://github.com/anonto42)

---

