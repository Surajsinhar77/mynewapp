// init-middleware.js

import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize CORS middleware
const cors = Cors({
  // Allow requests from specific origins
  origin: 'https://mynewapp-peach.vercel.app/',
  methods: ['GET', 'POST', 'OPTIONS'],
});

// Middleware function to wrap CORS
function applyMiddleware(handler) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      corsMiddleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(handler(req, res));
      });
    });
}

// Example usage:
export const runCors = initMiddleware(cors);
