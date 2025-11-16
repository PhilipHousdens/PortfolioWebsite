import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { Resend } from "resend";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware 
app.use(cors({
  origin: ["https://portfolio-website-eta-ten-50.vercel.app"],
  methods: ["GET", "POST"],
}));
app.use(express.json());

// Resend client setup
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple test route
app.get("/", (req, res) => {
    res.send("Backend server is running");
});

// API route
app.get("/api/hello", (req, res) => {
    res.json({message: "Hello from express backend"});
});

console.log("Email user:", process.env.EMAIL_USER);
console.log("Email pass exists:", !!process.env.EMAIL_PASS);

// === Contact Form Endpoint ===
app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required" });
  }

  try {
    // Send email
    await resend.emails.send({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your inbox
      subject: `Contact form message from ${firstName} ${lastName}`,
      text: message,
      html: `
        <h3>New Message from ${firstName} ${lastName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
      priority: "high",
      headers: {
            'X-Priority': '1 (Highest)',
            'X-MSMail-Priority': 'High',
            Importance: 'High'
        },
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));