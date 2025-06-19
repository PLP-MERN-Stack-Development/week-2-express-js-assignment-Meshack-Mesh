
# 🚀 Express.js RESTful API – Product Management

This is a RESTful API built using Express.js to manage a list of products. It includes full CRUD functionality, middleware, error handling, and advanced features like filtering, pagination, and search.

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd week-2-express-js-assignment-Meshack-Mesh
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a `.env` File
```env
PORT=3000
API_KEY=12345
```

### 4. Start the Server
```bash
npm start
```

---

## 🔐 Authentication

All routes require an API key header:
```http
x-api-key: 12345
```

---

## 🧱 Middleware Implemented

- **Logger Middleware** – Logs method, URL, timestamp
- **Auth Middleware** – Validates `x-api-key` header
- **Validation Middleware** – Validates product body for POST/PUT
- **Global Error Handler** – Catches and formats errors


API Endpoints

| Method | Endpoint                                      | Description                     |
|--------|-----------------------------------------------|---------------------------------|
| GET    | `/api/products`                               | List all products               |
| GET    | `/api/products/:id`                           | Get product by ID               |
| POST   | `/api/products`                               | Create a new product            |
| PUT    | `/api/products/:id`                           | Update a product by ID          |
| DELETE | `/api/products/:id`                           | Delete a product by ID          |
| GET    | `/api/products?category=Books`                | Filter by category              |
| GET    | `/api/products?search=laptop`                 | Search products by name         |
| GET    | `/api/products?limit=5&page=1`                | Paginate product list           |
| GET    | `/api/products/stats/count-by-category`       | Get product stats per category  |


Example Requests & Responses

 GET `/api/products/:id`

```http
GET http://localhost:3000/api/products/1
Headers:
  x-api-key: 12345
```

Response:
```json
{
  "id": "1",
  "name": "Math Textbook",
  "description": "Covers algebra and calculus.",
  "price": 750,
  "category": "Books",
  "inStock": true
}


POST `/api/products`

```http
POST http://localhost:3000/api/products
Headers:
  x-api-key: 12345
Content-Type: application/json
```

Body:
```json
{
  "name": "Laptop",
  "description": "Dell Inspiron 15",
  "price": 65000,
  "category": "Electronics",
  "inStock": true
}
---

### ✅ PUT `/api/products/:id`

```http
PUT http://localhost:3000/api/products/1
Headers:
  x-api-key: 12345
Content-Type: application/json
```

Body:
```json
{
  "name": "Updated Math Textbook",
  "description": "Now includes geometry.",
  "price": 800,
  "category": "Books",
  "inStock": false
}
```

Response:
```json
{
  "id": "1",
  "name": "Updated Math Textbook",
  "description": "Now includes geometry.",
  "price": 800,
  "category": "Books",
  "inStock": false
}
```

---

### ✅ DELETE `/api/products/:id`

```http
DELETE http://localhost:3000/api/products/2
Headers:
  x-api-key: 12345
```

Response:
```json
{
  "message": "Product deleted successfully"
}
```

## 📁 Project Structure

```
📦 week-2-express-js-assignment
├── server.js
├── routes
│   └── products.js
├── middleware
│   ├── logger.js
│   ├── auth.js
│   ├── validate.js
│   └── errorHandler.js
├── utils
│   └── errors.js
├── .env.example
└── README.md
