# 🛠️ Bike Servicing Management API

---

## 🌐 Live Backend URL

> [https://assignment9.nasimuddin.me](https://assignment9.nasimuddin.me)

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **Prisma ORM**
- **PostgreSQL**
- **TypeScript**

---

## 🚀 Setup Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/nasim0994/assignment9.git
   cd assignment9
   npm install
   npm run dev
   ```

---

## ✨ Key Features

### 1. 👤 Customer Management

- **POST** `/api/customers` – Create a new customer
- **GET** `/api/customers` – Get all customers
- **GET** `/api/customers/:id` – Get a specific customer by ID
- **PUT** `/api/customers/:id` – Update customer details
- **DELETE** `/api/customers/:id` – Delete a customer

---

### 2. 🏍️ Bike Management

- **POST** `/api/bikes` – Add a new bike
- **GET** `/api/bikes` – Get all bikes
- **GET** `/api/bikes/:id` – Get a specific bike by ID

---

### 3. 🔧 Service Management

- **POST** `/api/services` – Create a service record
- **GET** `/api/services` – Get all service records
- **GET** `/api/services/:id` – Get a specific service record
- **PUT** `/api/services/:id/complete` – Mark a service as completed

#### 🕒 Special Route – Pending or Overdue Services

- **GET** `/api/services/status` – Returns all services that are `"pending"` or `"in-progress"` and **older than 7 days**

---
