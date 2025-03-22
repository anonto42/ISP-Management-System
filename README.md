# ISP Management System

## Overview

The **ISP Management System** is a web-based application designed to help Internet Service Providers (ISPs) manage customer accounts, service configurations, billing, and support. The system is built with modern technologies to ensure scalability, reliability, and ease of use. It is powered by **Next.js**, styled with **Tailwind CSS**, and uses **MongoDB** for data storage with **Prisma** as the ORM. The application is containerized using **Docker** and served through **Nginx**.

## Features

- **Customer Management**: Add, update, and manage customer accounts.
- **Billing & Invoicing**: Generate customer invoices, track payments, and manage billing cycles.
- **Service Configuration**: Configure internet plans, bandwidth limits, and customer usage.
- **Usage Monitoring**: Track data usage and bandwidth consumption for each customer.
- **Admin Panel**: Admins can manage users, view system metrics, and configure ISP operations.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js with Next.js API Routes
- **Database**: MongoDB (using Prisma as the ORM)
- **Authentication**: JSON Web Tokens (JWT) for secure login sessions
- **Containerization**: Docker
- **Reverse Proxy**: Nginx
