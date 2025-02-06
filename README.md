# 📅 Real-Time Calendar App

## 🚀 Project Overview

This project is a real-time calendar application built with **Node.js**, **Express**, **Socket.io**, and **MySQL**. It allows users to select dates for leave requests, which are then stored in a MySQL database. The project also utilizes **Faker.js** to generate dummy employee data for testing.

![Screenshot](/public/screenshot-calender.png)

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Real-Time Communication:** Socket.io
- **Database:** MySQL (via `mysql2` package)
- **Data Generation:** Faker.js


## ⚙️ Installation & Setup

### Prerequisites

- Install **Node.js** and **npm** (or **yarn**) if not already installed.
- Install **MySQL** and create a database named `calendar`.

### Steps to Run Locally

1. Clone the repository:
    
    ```sh
    git clone https://github.com/elledevelope/calendar-RH-ORP-nodeJS.git
    cd calendar-RH-ORP-nodeJS
    ```
    
2. Install dependencies:
    
    ```sh
    npm install
    ```
    
3. Configure MySQL database connection in `index.js`:
    
    ```js
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "", // Update accordingly
        database: "calendar"
    });
    ```
    
4. Start the server:
    
    ```sh
    node index.js
    ```
    
5. Open your browser and go to:
    
    ```
    http://127.0.0.1:4000
    ```
    

## 🖥 API & Socket Events

### **Socket.io Events**

- `connection`: Listens for new socket connections.
- `selectDates`: Stores selected leave dates into the database.

## 📌 Features

- 📡 Real-time communication using Socket.io
- 🗂️ MySQL integration for storing leave requests
- 🛠️ Faker.js for generating mock employee data
- 🚀 Simple and lightweight Express.js setup

## 🎯 Future Enhancements

- ✅ User authentication system
- 📅 UI improvements for calendar selection
- 📊 Admin panel for managing requests

## 📜 License

This project is licensed under the **MIT License**.

