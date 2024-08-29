# DiplomaNet

**DiplomaNet** is a Digital E-Library tailored specifically for diploma students in India. This project aims to provide easy access to well-organized, syllabus-aligned study materials and foster a collaborative online environment for students.

## About the Project

The goal of DiplomaNet is to enhance learning outcomes by making quality educational resources easily accessible to diploma students and promoting continuous collaboration among them. The platform will be built using the MERN stack to ensure a user-friendly, interactive experience with reliable data management.

## Features

- **Syllabus-Aligned Content:** 📚 All study materials are organized according to the official syllabus.
- **Interactive Learning Environment:** 🤝 Engage with other students and collaborate on projects.
- **User-Friendly Interface:** 🖥️ Easy navigation and clean design.
- **Resource Management:** 📁 Upload, download, and manage study materials efficiently.

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

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are *greatly appreciated*.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Screenshots

- **Home Page:**  
  ![Screenshot 1](https://github.com/user-attachments/assets/9f2d453e-07dd-4561-b9c1-5674a46efbcf)

- **Login Page:**  
  ![Screenshot 2](https://github.com/user-attachments/assets/1d3d8172-4d30-47c7-8063-acb8a9911201)

- **Registration Page:**  
  ![Screenshot 3](https://github.com/user-attachments/assets/59d56fdc-5eb3-45cf-8eb3-633fbbc10cf4)

- **Dashboard Overview:**  
  ![Screenshot 4](https://github.com/user-attachments/assets/fe8a619a-4e1c-4035-ada1-5cef025211dd)

- **Study Materials Section:**  
  ![Screenshot 5](https://github.com/user-attachments/assets/5701c583-f6db-4b6b-8e21-5d1baa33b026)

- **Book Download Option:**  
  ![Screenshot 6](https://github.com/user-attachments/assets/da340382-b792-47c6-a518-78591e6972f4)

- **Collaborative Project Feature:**  
  ![Screenshot 7](https://github.com/user-attachments/assets/896c2745-0580-41a2-a66c-13ddb284c9b9)

- **User Profile Management:**  
  ![Screenshot 8](https://github.com/user-attachments/assets/cae7a68e-eb91-4189-a2e2-2d591561ee29)

- **Notifications and Updates:**  
  ![Screenshot 9](https://github.com/user-attachments/assets/5e464fb2-d1dd-4c19-924e-0ee7497514d5)

- **Chat and Discussion Forum:**  
  ![Screenshot 10](https://github.com/user-attachments/assets/43df6ac4-4307-4bfe-8117-3d2a632ffe4c)

- **Feedback and Support:**  
  ![Screenshot 11](https://github.com/user-attachments/assets/d12de8ab-47dd-495d-aea1-bab83fc8bdb9)

## Flowchart

```mermaid
graph TD
    A([Ebook Site]) --> B[Sign-up]
    B --> C[Login]
    C --> D{Verify Login}
    D -- Not Verified --> C
    D -- Verified --> E[Select Menu]
    E --> F[Branch]
    F --> G[E-book]
    G --> H[View Book]
    H --> I((Download))

## Contact

- **Project Maintainer:** Nitesh Giri
- **Email:** [Niteshgiri068@gmail.com](mailto:Niteshgiri068@gmail.com)
- **GitHub Repository:** [DiplomaNet](https://github.com/Nitesh-Giri/DiplomaNet/)

## Team Members

- **Sujit Kumar Srivastav** (GitHub: [5ujit](https://github.com/5ujit))
- **Nitesh Kumar** (GitHub: [Nitesh1594](https://github.com/Nitesh1594))
- **Nitesh Giri** (GitHub: [Nitesh-Giri](https://github.com/Nitesh-Giri))
