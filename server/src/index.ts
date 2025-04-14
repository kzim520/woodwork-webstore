import express, { Request, Response } from "express";
import cors from "cors";
import { pool } from "./db"; 
import multer from "multer";
import path from "path";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Test route
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the backend!" });
});

// Multer storage setup
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Updated route with file upload
app.post(
  "/api/custom-order",
  upload.array("images", 5), // Accept up to 5 images
  async (req: Request, res: Response) => {
    try {
      const { name, email, phone, projectDescription } = req.body;

      // Build array of uploaded file paths
      const imagePaths = (req.files as Express.Multer.File[]).map(
        (file) => `/uploads/${file.filename}`
      );

      const result = await pool.query(
        `
        INSERT INTO custom_orders
        (name, email, phone, project_description, image_paths)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id
        `,
        [name, email, phone, projectDescription, imagePaths]
      );

      console.log("✅ Order saved with images:", imagePaths);

      res.status(200).json({
      status: "success",
      message: "Order received and stored.",
      orderId: result.rows[0].id,
      imagePaths: imagePaths, // send back what was stored
});
    } catch (err) {
      console.error("❌ Upload or DB error:", err);
      res.status(500).json({ message: "Something went wrong." });
    }
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});