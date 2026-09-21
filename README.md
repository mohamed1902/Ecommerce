<<<<<<< HEAD
# Ecommerce
Ecommerce Web Application built with Angular &amp; RxJS, featuring product filtering, detailed views, category routing, dynamic shopping cart management, and responsive UI.
=======
# 🛒 E-Commerce Web Application

A dynamic and responsive E-Commerce web application built using **Angular 17**, **RxJS**, and **PrimeFlex/SCSS**. The application simulates a real-world shopping experience featuring product categories, real-time cart state management, product details, and search capabilities powered by a RESTful Mock API (`json-server`).

---
## ✨ Key Features

- **Product Catalog & Specific Categories:** Dynamic routing with `ActivatedRoute` and `paramMap` to render products filtered by category.
- **Product Details View:** Fetching single product details via dynamic URL parameters.
- **Reactive Shopping Cart:** Dynamic cart management using RxJS `BehaviorSubject` and `localStorage` persistence to sync cart counts across components (Navbar, Home, Products, Details).
- **State Synchronization:** Automatic synchronization of `isAddToCart` state across all components and product cards.
- **Toast Notifications:** Feedback alerts when adding products or handling duplicates.
- **Responsive Design:** Fully responsive layout built using Flexbox, CSS Grid, and Utility classes.

---
## 🛠️ Tech Stack & Tools

- **Framework:** Angular 17 (Standalone Components)
- **State Management & Reactive Programming:** RxJS (`BehaviorSubject`, `Observables`, `paramMap`)
- **Routing:** Angular Router (Dynamic Routing & Params)
- **Styling:** SCSS, PrimeFlex 
- **Mock Backend:** `json-server` (REST API)
- **HTTP Client:** Angular HttpClient Module
- **Version Control:** Git & GitHub

---
## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
cd YOUR_REPOSITORY_NAME
```
### 2. Install dependencies
```bash
npm install
```

### 3. Run the JSON Server (Mock API)
```bash
npx json-server --watch db.json --port 3000 --delay 2000
```
### 4. Run the Angular development server
```bash
ng serve
```
>>>>>>> 88e2173 (Initial commit: complete ecommerce project with readme)
