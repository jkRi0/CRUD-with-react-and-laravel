# Product CRUD Application

A simple CRUD (Create, Read, Update, Delete) application built with React frontend and Laravel backend.

## Setup Instructions

### Backend Setup (Laravel)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Copy environment file:
   ```bash
   copy .env.example .env
   ```

4. Generate application key:
   ```bash
   php artisan key:generate
   ```

5. Run migrations:
   ```bash
   php artisan migrate
   ```

6. Start the Laravel server:
   ```bash
   php artisan serve
   ```

   The backend will be available at `http://localhost:8000`

### Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`

## API Endpoints

The Laravel backend provides the following API endpoints for products:

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/{id}` - Get a specific product
- `PUT /api/products/{id}` - Update a product
- `DELETE /api/products/{id}` - Delete a product

## Features

- **Create Products**: Add new products with name, description, and price
- **Read Products**: View all products in a table format
- **Update Products**: Edit existing product information
- **Delete Products**: Remove products from the list
- **Responsive Design**: Clean and modern UI with proper styling

## Data Structure

Product model includes:
- `id` (auto-increment)
- `name` (string, required)
- `description` (text, required)
- `price` (decimal, required)
- `created_at` (timestamp)
- `updated_at` (timestamp)

## Technology Stack

### Backend
- Laravel 12
- PHP 8.2+
- SQLite Database (default)

### Frontend
- React 19
- Axios for HTTP requests
- CSS3 for styling

## Notes

- CORS is configured to allow requests from any origin during development
- The application uses SQLite as the default database for simplicity
- Form validation is implemented on both frontend and backend
