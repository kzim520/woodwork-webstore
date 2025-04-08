import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Test route
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the backend!" });
});

// Form submission route (for later)
app.post("/api/custom-order", (req: Request, res: Response) => {
  console.log("📦 Custom order received:", req.body);
  res.json({ status: "success", message: "Order received!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});