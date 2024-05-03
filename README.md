# Delicious Dash
Delicious Dash is a web application built on Node.js, Express, and EJS, following the MVC (Model-View-Controller) architecture. 
It provides a platform for users to browse menus and allows admins to manage menu items.

<img width="1429" alt="Screenshot 2024-05-02 at 10 48 48 PM" src="https://github.com/AriGitCode/foodApp2023/assets/102875790/5a3e51c8-2ff1-4cc6-807f-6a56d4e963fc">

### Features
**JWT Authentication:**
Secure authentication system with JSON Web Tokens (JWT) for both users and admins.
**User Management:**
Users can sign up and log in to access the menu.
**Admin Dashboard:**
Admins have exclusive access to a dashboard where they can:
Update menu items.
Delete menu items.
Add new menu items.

### Installation
Follow these steps to get Delicious Dash up and running on your local machine:

*Clone the repository:*
`git clone https://github.com/yourusername/DeliciousDash.git`

*Navigate to the project directory:*
`cd`

*Install dependencies using npm:*
`npm install`

*Set up environment variables:*
Create a .env file in the root directory of the project.

Define the following variables:
PORT=3000
JWT_SECRET=your_jwt_secret_here
MONGODB_URI=your_mongodb_connection_string_here

*Start the server:*
`npm start`

The app will be running at http://localhost:3000.

Visit http://localhost:3000 in your browser to access Delicious Dash.

User Authentication:
- Users can sign up for an account or log in if they already have one.

Menu Access:
- Once logged in, users can browse the menu.

Admin Access:
- Admins can log in using their credentials to access the dashboard for managing menu items.

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript)
- JSON Web Tokens (JWT)
- MongoDB
