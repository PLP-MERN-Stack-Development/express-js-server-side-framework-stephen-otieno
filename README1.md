# Express.js Server Side Framework Project

A simple Express.js server built for learning and experimentation. This project demonstrates basic routing, environment variable usage, and modular structure.

## Features

- RESTful API structure
- Modular routing with `products.js`
- Environment variable support via `.env`
- API key integration
- Lightweight and beginner-friendly

## Installation

```bash
git clone https://github.com/PLP-MERN-Stack-Development/express-js-server-side-framework-stephen-otieno.git
cd express-js-server-side-framework-stephen-otieno
npm init -y


## Configuration
Create a  file in the root directory based on .env.example

PORT=3000
API_KEY=your_api_key_here

## Running the server
node server.js


##  Project Structur

├── routes/
│   └── products.js
├── server.js
├── .env
├── .env.example
├── package.json
└── README.md

## API Endpoint


GET     /products  - Fetch all products
POST    /products   - Add a new product
DELETE  /product/:id -Delete a product by id

## Example Requests & Response

GET /products HTTP/1.1
Host: localhost:3000

### Response
[
  {
    "id": "a1b2c3d4",
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics"
  },
  {
    "id": "e5f6g7h8",
    "name": "Headphones",
    "price": 150,
    "category": "Audio"
  }
]

##  Built With

Express.js
Node.js
dotenv
uuid
```
