// Determine base URL based on environment
export const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        // Browser context
        return '';
    }
    
    if (process.env.VERCEL_URL) {
        // Vercel production
        return `https://${process.env.VERCEL_URL}`;
    }
    
    if (process.env.NEXT_PUBLIC_APP_URL) {
        // Custom domain or local development
        return process.env.NEXT_PUBLIC_APP_URL;
    }
    
        // Local development
        return 'http://localhost:3000';
};


