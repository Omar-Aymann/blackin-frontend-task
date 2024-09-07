# Login Form with Protected Route

This project demonstrates a simple login form with React, styled with SASS, and includes client-side routing using React Router. It uses Axios for making HTTP requests and Vite as the build tool. The application ensures that the `/home` route is accessible only if the user is logged in and a specific cookie is present.

## Technologies Used

- **React**: Frontend library for building user interfaces
- **React Router**: For client-side routing
- **Axios**: For making HTTP requests
- **SASS**: For styling
- **Vite**: Build tool for fast development

## Features

- **Login Form**: Users can log in with an email and password.
- **Protected Route**: The `/home` route is protected and can only be accessed if the user is logged in and a cookie named `token` with a specific value is present.
- **Cookie Handling**: Uses cookies to manage user authentication state.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Yousef767/blackin-frontend-task/.git
   cd blackin-frontend-task
   npm install
