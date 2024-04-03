// init-middleware.js

import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize CORS middleware
const cors = Cors({
  // Allow requests from specific origins
  origin: '/',
  methods: ['GET', 'POST', 'OPTIONS'],
});

// Middleware function to wrap CORS
export default function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// Example usage:
export const runCors = initMiddleware(cors);
