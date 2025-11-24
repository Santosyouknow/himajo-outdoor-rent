import "dotenv/config";
import express from "express";
import cors from "cors";
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import { handleDemo } from "./routes/demo";
import { getProductBySlug, listProducts, updateProduct } from "./routes/products";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
      ? process.env.FRONTEND_URL || 'http://localhost:8080'
      : 'http://localhost:8080',
    credentials: true
  }));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // Configure CSRF
  const csrfProtection = csrf({
    cookie: {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  });

  // Add CSRF token to all responses
  app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken ? req.csrfToken() : '';
    next();
  });

  // CSRF token endpoint for frontend to fetch
  app.get('/api/csrf-token', (req, res) => {
    res.json({ csrfToken: res.locals.csrfToken });
  });

  // Public API routes (not protected by CSRF)
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  // Apply CSRF protection to all API routes
  app.use('/api', csrfProtection);

  // Protected API routes
  app.get("/api/demo", handleDemo);
  app.get("/api/products", listProducts);
  app.get("/api/products/:slug", getProductBySlug);
  app.put("/api/products/:id", updateProduct);

  return app;
}
