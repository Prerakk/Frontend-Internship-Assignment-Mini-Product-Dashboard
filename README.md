# Frontend Internship Assignment - Mini Product Dashboard

## Overview

This project is a responsive mini product dashboard built using React.js and Tailwind CSS. It fetches product data from the FakeStore API and allows users to search, filter, sort, and view detailed product information in a modal view.

The purpose of this assignment is to demonstrate frontend development skills, including API handling, responsive design, state management, and clean code structure.

## Features

- Fetch and display products from a public API
- Search products by title
- Filter products by category
- Sort products by price (Low to High / High to Low)
- Responsive grid layout for desktop, tablet, and mobile screens
- Modal popup for detailed product information
- Loading and error handling states

## Tech Stack

- **Frontend Framework:** React.js (with Vite)
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **API Source:** [FakeStore API](https://fakestoreapi.com)

## Project Structure

```
frontend-intern-assignment/
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductModal.jsx
│   │   └── header.jsx
│   ├── pages/
│   │   └── dashboard.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── dist/
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Setup Instructions

### Prerequisites

Ensure the following are installed on your system:

- Node.js (v18 or later)
- npm (comes with Node.js)
- Git (for version control)

### Steps to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/frontend-intern-assignment.git
```

2. Navigate to the project directory:

```bash
cd frontend-intern-assignment
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the application in your browser at:

```
http://localhost:5173/
```

## Build for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be available in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project can be deployed easily using platforms such as Vercel, Netlify, or GitHub Pages.

### Example Deployment Steps (Vercel)

1. Push the repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import the GitHub repository
4. Click on Deploy
5. The live demo link will be generated automatically

### Alternative: Deploy via Vercel CLI

1. Install Vercel CLI globally:

```bash
npm install -g vercel
```

2. Deploy from the project directory:

```bash
vercel deploy
```

## API Reference

**Endpoint:**

```
https://fakestoreapi.com/products
```

**Sample Response:**

```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

## Evaluation Criteria

- Code structure and readability
- UI/UX and responsive design
- Functionality (search, filter, sorting)
- Proper API handling and error states
- React component structure and hooks usage
- **Bonus:** Product detail modal, animations, and additional polish

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Author

**Prerak Pandya**

Frontend Developer Intern Candidate

- **Email:** pandyaprerak4@gmail.com
- **GitHub:** https://github.com/<your-username>
- **LinkedIn:** https://linkedin.com/in/prerak-pandya

## License

This project is created as part of a frontend internship assignment.
