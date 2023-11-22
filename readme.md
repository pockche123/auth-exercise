
# Authorization App

This is a simple authorization app that allows users to register, login, and post content.

## Features

- User Registration: Users can create a new account by providing a username and password.
- User Login: Registered users can log in using their credentials.
- Post Creation: Authenticated users can create and post content.
- Authorization: The app ensures that only authenticated users can access certain features.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: PostgreSQL

## Getting Started

Follow the steps below to get the app up and running on your local machine.

### Prerequisites

- Node.js installed

### Installation

1. Clone the repository and cd:  
```bash
   git clone https://github.com/pockche123/auth-exercise.git && cd api
 ```

2. Setup Config file 

 - Setup your db url from [ElephantSQl](https://customer.elephantsql.com). (For starters, [click here](https://www.elephantsql.com/docs/index.html
) for a guide.)   
 - Create a **.env file** withn the **api** file
 
```bash
  PORT= 
  DB_URL=
  BCRYPT_SALT_ROUNDS=
```

3. Install required npm dependencies

```bash
npm install
```

4. Run the server 
```bash
npm run dev
```


