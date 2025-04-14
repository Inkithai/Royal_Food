# Royal Food - Food Ordering Application

A full-stack food ordering web application built with **React (Vite)** for the Customer and Admin dashboards, and **Node.js** for the backend API server. The project uses modular architecture for scalability and easy maintenance.

## Project Structure

```bash
royal_food/
├── admin-frontend/    # Admin Dashboard (React/Vite)
├── backend/           # Backend API (Node.js)
└── frontend/          # Customer Frontend (React/Vite)
```

## Tech Stack

- **Frontend (Customer & Admin):** React.js + Vite
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **State Management:** Context API
- **Authentication:** Custom Middleware
- **API Communication:** HTTP REST APIs

## Architecture Diagram

```mermaid
flowchart TD
    %% Customer Frontend Subgraph
    subgraph "Customer Frontend (React/Vite)"
        CF_Root["Customer Frontend"]
        CF_Pages["Pages: Home, Cart, MyOrders, PlaceOrder, Verify"]
        CF_Components["Components: Navbar, Header, Footer, FoodDisplay, Fooditems, ExploreMenu, LoginPopup, etc."]
        CF_Context["StoreContext (State Management)"]
        CF_Root --> CF_Pages
        CF_Root --> CF_Components
        CF_Root --> CF_Context
    end

    %% Admin Frontend Subgraph
    subgraph "Admin Frontend (React/Vite)"
        AF_Root["Admin Frontend"]
        AF_Pages["Pages: Add, List, Orders"]
        AF_Navbar["Navbar"]
        AF_Sidebar["Sidebar"]
        AF_Root --> AF_Pages
        AF_Root --> AF_Navbar
        AF_Root --> AF_Sidebar
    end

    %% Backend API Server Subgraph
    subgraph "Backend API Server (Node.js)"
        BE_Root["Backend API Server"]
        BE_Routes["Routes (foodRoute, orderRoute, cartRoute, userRoute)"]
        BE_Middleware["Middleware (auth.js)"]
        BE_Controllers["Controllers (foodController, orderController, cartController, userController)"]
        BE_Models["Models (foodModel, orderModel, userModel)"]
        BE_DBConfig["Database Config (db.js)"]
        BE_Database["Database (MongoDB)"]
        BE_Root --> BE_Routes
        BE_Routes --> BE_Middleware
        BE_Middleware --> BE_Controllers
        BE_Controllers --> BE_Models
        BE_DBConfig --> BE_Database
        BE_Models --> BE_Database
    end

    %% Data Flow from Frontends to Backend
    CF_Pages -->|"HTTP_API"| BE_Routes
    AF_Pages -->|"HTTP_API"| BE_Routes

    %% Click Events
    click CF_Root "https://github.com/inkithai/royal_food/tree/main/frontend/"
    click CF_Pages "https://github.com/inkithai/royal_food/tree/main/frontend/src/pages/"
    click CF_Components "https://github.com/inkithai/royal_food/tree/main/frontend/src/components/"
    click CF_Context "https://github.com/inkithai/royal_food/blob/main/frontend/src/context/StoreContext.jsx"
    click AF_Root "https://github.com/inkithai/royal_food/tree/main/admin-frontend/"
    click AF_Pages "https://github.com/inkithai/royal_food/tree/main/admin-frontend/src/pages/"
    click AF_Navbar "https://github.com/inkithai/royal_food/tree/main/admin-frontend/src/components/Navbar/"
    click AF_Sidebar "https://github.com/inkithai/royal_food/tree/main/admin-frontend/src/components/Sidebar/"
    click BE_Root "https://github.com/inkithai/royal_food/tree/main/backend/"
```
