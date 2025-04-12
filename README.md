# ISP Management System

A web-based platform for managing ISP users, internet packages, and interacting with MikroTik routers.

## 📦 Package Details

**Name:** `isp-management-system`  
**Version:** `0.1.0`  
**Framework:** Next.js with Turbopack  
**Language:** TypeScript  
**Styling:** TailwindCSS  
**Database:** Prisma ORM

---

## 🚀 How to Run This Project

### 1. Clone the repository
```bash
git clone https://github.com/anonto42/ISP-Management-System.git
cd ISP-Management-System
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Rename `.env.sample` to `.env` and fill out the required values.

### 4. Run the project in development mode
```bash
npm run dev
```

---

## 🐳 Run with Docker Compose

You can also run this project using Docker Compose:

```bash
docker compose up
```

---

## ⚠️ Important Notes on MikroTik Connection

Some features will **NOT work** unless MikroTik is connected properly:

- Creating users via the panel  
- Viewing connected users in real time  
- Fetching MikroTik packages (internet speed plans)  
- Creating internet packages

### 🔧 MikroTik Setup Instructions:

1. Assign an IP to your MikroTik device for API access  
2. Enable the **API service** on MikroTik  
3. Go to the `/settings/config` page in the project and connect to MikroTik  
4. You can also use **VirtualBox** to simulate MikroTik if needed

---

## 📜 Scripts

| Script   | Description                                          |
|----------|------------------------------------------------------|
| dev      | Start development server using Turbopack             |
| build    | Generate Prisma client, push DB, and build the app  |
| start    | Run the Next.js production server                    |
| lint     | Run ESLint to check for code issues                  |

---

## 🛠️ Main Dependencies

- `next` v15.2.2  
- `react` v18.3.1  
- `prisma` v6.5.0  
- `tailwindcss` v4  
- `routeros-client` for MikroTik API integration  
- `cloudinary`, `twilio`, `axios`, `bcryptjs`, `react-toastify`, `recharts`, etc.

---

## 🤝 Contribution

Feel free to fork this repo, submit issues or pull requests.

---

## 👨‍💻 Author

**Md Sohidul Islam Ananto**  
GitHub: [@anonto42](https://github.com/anonto42)