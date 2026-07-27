require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
    res.json({
        status: "online",
        message: "✅ Yoco backend is running"
    });
});

// Create Checkout
app.post("/create-checkout", async (req, res) => {
    try {
        const { amount } = req.body;

        // Validate amount
        if (!amount || amount <= 0) {
            return res.status(400).json({
                error: "Invalid amount supplied."
            });
        }

        const response = await fetch("https://payments.yoco.com/api/checkouts", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.YOCO_SECRET_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: amount,
                currency: "ZAR"
            })
        });

        console.log("Yoco Status:", response.status);

        const data = await response.json();

        console.log("Yoco Response:");
        console.log(data);

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);

    } catch (error) {

        console.error("Server Error:", error);

        res.status(500).json({
            error: "Checkout creation failed.",
            message: error.message
        });

    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Yoco server running on port ${PORT}`);
});