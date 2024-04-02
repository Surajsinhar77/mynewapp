import Cros from 'cors';
import initMiddleware from '@/lib/init-middleware';

// Initialize the CORS middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests from the specified origin
    origin: 'https://your-nextjs-app.vercel.app',
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default cors;

