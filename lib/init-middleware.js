import cors from 'cors';

// Initialize CORS middleware
const corsMiddleware = cors({
  // Allow requests from specific origins
  origin: 'https://mynewapp-peach.vercel.app/',
  methods: ['GET', 'POST', 'OPTIONS'],
});

// Middleware function to wrap CORS
function applyMiddleware(handler) {
  return (req, res, next) => { // Add 'next' parameter
    corsMiddleware(req, res, (err) => {
      if (err) {
        return next(err); // Pass any error to the next middleware
      }
      return handler(req, res, next); // Call the next middleware
    });
  };
}

// Example usage:
export const runCors = applyMiddleware((req, res) => {
  // Your route handler logic goes here
});
