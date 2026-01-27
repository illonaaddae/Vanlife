# Vanlife

![Vanlife Banner](src/assets/images/modest-explorer.png)

## Overview

Vanlife is a modern web application for booking and managing camper vans. Built with React and Firebase, it provides a seamless experience for both van renters and hosts. The project demonstrates advanced React patterns, routing, authentication, and integration with Firestore.

## Features

- Browse available vans with detailed information
- Host dashboard for managing vans, income, and reviews
- Authentication for hosts
- Responsive design for mobile and desktop
- Data storage and retrieval using Firebase Firestore
- Custom error handling and loading states

## Technologies Used

- React
- Vite
- Firebase (Firestore)
- MirageJS (for local API mocking)
- ESLint

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/illonaaddae/Vanlife.git
   cd Vanlife
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Set up Firebase:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
   - Add your Firebase config to `src/firebase/firebase.js`
   - Seed the database using the provided script if needed

### Running the App

Start the development server:
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
├── src/
│   ├── assets/images/        # Image assets
│   ├── components/           # Reusable React components
│   ├── firebase/             # Firebase config and seed scripts
│   ├── pages/                # Route-based pages
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── api.js                    # API and data fetching logic
├── server.js                 # MirageJS mock server
├── package.json
├── README.md
└── ...
```

## Usage

- **Browse Vans:** View all available vans and details.
- **Host Dashboard:** Log in as a host to manage your vans, view income, and read reviews.
- **Authentication:** Secure login for hosts (demo credentials provided in seed data).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the repository owner via GitHub.
