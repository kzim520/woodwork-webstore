/**
 * API_URL
 *
 * Defines the base URL used for API requests in the frontend.
 *
 * - At build time, it attempts to read `VITE_API_URL` from environment variables.
 * - If not defined (e.g. in local development), it falls back to `http://localhost:3001`.
 *
 * This allows seamless switching between development and production environments
 * without hardcoding API endpoints.
 *
 * Usage:
 *   fetch(`${API_URL}/api/your-endpoint`)
 */
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
