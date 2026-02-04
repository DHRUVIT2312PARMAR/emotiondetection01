// This environment variable should be set in the Vercel Dashboard
// Example: NEXT_PUBLIC_API_URL = https://your-backend-name.onrender.com
const FALLBACK_URL = "https://your-backend-name.onrender.com"; // Replace this with your actual Render URL

const getBaseUrl = () => {
    // Priority 1: Environment Variable (Vercel/Production)
    const envUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL;
    if (envUrl) return envUrl;

    // Priority 2: Localhost Detection
    if (typeof window !== "undefined") {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            return "http://localhost:8000";
        }
    }

    // Priority 3: Default Render URL
    return FALLBACK_URL;
};

export const API_BASE_URL = getBaseUrl();
