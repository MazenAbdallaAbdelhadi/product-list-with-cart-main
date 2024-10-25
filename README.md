# **Product Listing App**

This is a simple e-commerce product listing application built with **React (Vite)** and **TailwindCSS**. It fetches product data from the **Fake Store API** and displays it in a responsive, user-friendly layout. The project aims to showcase clean code practices and efficient data fetching using a custom React hook.

---

## **Features**
- **Responsive Design**: Layout adjusts for both mobile and desktop devices.
- **TailwindCSS**: For rapid and consistent styling.
- **Custom Hook (`useFetch`)**: Handles data fetching with error and loading states.
- **Axios Integration**: Simplifies HTTP requests.

---

## **Getting Started**

### **Prerequisites**
Make sure you have the following installed:
- **Node.js** (version 16 or above)
- **npm** or **yarn**

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/MazenAbdallaAbdelhadi/product-list-with-cart-main.git
   cd product-list-with-cart-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### **Running the Application**

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## **Project Structure**
```
src/
├── components/
│   ├── product-list.tsx 
│   └── product-card.tsx  // Component for displaying individual product details
├── hooks/
│   └── useFetch.js       // Custom hook for fetching data from the API
├── App.jsx               // Main App component
└── index.css             
```

---

## **Challenges Faced**

1. **Managing State on Component Unmount:**  
   - A potential issue with state updates after component unmounts was handled by adding a cleanup function with the `isMounted` flag in the custom hook.

2. **Responsive Design:**  
   - Tailoring the layout for different screen sizes (375px and 1440px) using Tailwind's grid system required testing across various screen widths.

---

## **How to Use the Application**

- The product listing page will load data from the **Fake Store API**.
- You can browse products, and each product card displays the product image, title, and price.

---

## **Technologies Used**
- **React** with Vite for fast development
- **TailwindCSS** for styling
- **Axios** for HTTP requests
- **JavaScript (ES6+)**

---

## **License**
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify it for your needs. 

---