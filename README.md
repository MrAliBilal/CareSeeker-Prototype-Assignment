# CareSeeker Prototype

## Overview
This is a prototype designed for the Final Year Project (FYP) CareSeeker. This prototype aims to streamline and enhance the process of seeking care services. It allows users to sign up either as a care seeker or a support worker and leverages a variety of technologies to create a robust, efficient, and user-friendly application.

![](https://github.com/MrAliBilal/CareSeeker-Prototype-Assignment/blob/main/Output%20Images/4.%20Login%20page.png)

## Technologies Used

### Front-end
- **HTML**: For structuring the web pages.
- **CSS**: For styling and layout.
- **JavaScript**: For interactive and dynamic content.

### Back-end
- **Node.js**: For executing JavaScript on the server-side.
- **Express.js**: For building the web server and handling routes.

### Database
- **PostgreSQL**: For managing the application's data with a relational database system.

### Packages
- **body-parser**: For handling HTTP request bodies, making it easy to parse incoming request data.
- **knex**: For SQL query building, allowing seamless interaction with the PostgreSQL database.
- **nodemailer**: For sending emails, useful for notifications and verifications.
- **nodemon**: For automatically restarting the server during development, enhancing the development workflow.

## Installation

To get started with the CareSeeker prototype, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/AliBilal-1/CareSeeker-Prototype-Assignment.git
    cd CareSeeker-Prototype-Assignment
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up the database**:
    - Ensure PostgreSQL is installed and running.
    - Create a database and configure the connection settings in the project.

4. **Run the application**:
    ```sh
    npm start
    ```

## Usage

1. **Start the development server**:
    ```sh
    npm run dev
    ```

2. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

Happy Coding!
