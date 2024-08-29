# DiplomaNet

**DiplomaNet** is a Digital E-Library tailored specifically for diploma students in India. This project aims to provide easy access to well-organized, syllabus-aligned study materials and foster a collaborative online environment for students.

## About the Project

The goal of DiplomaNet is to enhance learning outcomes by making quality educational resources easily accessible to diploma students and promoting continuous collaboration among them. The platform will be built using the MERN stack to ensure a user-friendly, interactive experience with reliable data management.

## Features

- **Syllabus-Aligned Content:** 📚 All study materials are organized according to the official syllabus of diploma courses, ensuring students access the most relevant resources.
- **Interactive Learning Environment:** 🤝 Engage with other students through chat, forums, and collaborative projects to foster a supportive learning community.
- **User-Friendly Interface:** 🖥️ Easy navigation and a clean, intuitive design make it simple for users to find the resources they need.
- **Resource Management:** 📁 Upload, download, and manage study materials efficiently with robust file management capabilities.
- **Notifications and Updates:** 🔔 Stay informed about new materials, upcoming exams, or any updates through a real-time notification system.
- **User Profile Management:** 🧑‍💻 Manage personal information, track your learning progress, and customize your profile settings.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Version Control:** Git, GitHub

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Nitesh-Giri/DiplomaNet.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd DiplomaNet
    ```

3. **Install the necessary packages:**
    ```sh
    npm install
    ```

4. **Set up your MongoDB connection string in the `.env` file:**
    ```env
    MONGO_URI=<Your MongoDB Connection String>
    ```

5. **Run the application:**
    ```sh
    npm start
    ```

## Usage

Once the application is up and running, you can start exploring the different features available for students, such as browsing study materials, participating in discussions, and uploading new resources.

### Default Credentials

For testing purposes, you might use the following credentials to log in as a student or admin:

- **Student:** `email: student@example.com`, `password: student123`
- **Admin:** `email: admin@example.com`, `password: admin123`

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are *greatly appreciated*.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use meaningful commit messages (e.g., `fix: corrected navbar alignment issue`).
- Follow the coding style guidelines as per the ESLint configuration provided in the project.

  ## Flowchart

```mermaid
graph TD
    A([DiplomaNet]) --> B[Sign-up]
    B --> C[Login]
    C --> D{Verify Login}
    D -- Not Verified --> C
    D -- Verified --> E[Select Menu]
    E --> F[Courses]
    F --> G[E-book]
    G --> H[View Book]
    H --> I((Download))

## Screenshots

- **Home Page:**  
  ![Home Page Screenshot](https://github.com/user-attachments/assets/9f2d453e-07dd-4561-b9c1-5674a46efbcf)  
  *The landing page where users can see an overview of the available features.*

- **Self Help Book:**  
  ![Login Page Screenshot](https://github.com/user-attachments/assets/1d3d8172-4d30-47c7-8063-acb8a9911201)  
  *The login page where users can enter their credentials to access the platform.*

- **About us & Contact Us:**  
  ![Registration Page Screenshot](https://github.com/user-attachments/assets/59d56fdc-5eb3-45cf-8eb3-633fbbc10cf4)  
  *New users can register on the platform by providing basic details.*

- **Dashboard Overview:**  
  ![Dashboard Overview Screenshot](https://github.com/user-attachments/assets/fe8a619a-4e1c-4035-ada1-5cef025211dd)  


