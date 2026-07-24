require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create-checkout", async (req, res) => {

    try {

        const { amount } = req.body;

        const response = await fetch(
            "https://payments.yoco.com/api/checkouts",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.YOCO_SECRET_KEY}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    amount: amount,
                    currency: "ZAR"
                })

            }
        );

        const data = await response.json();

        console.log(data);

        res.json(data);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Checkout creation failed"
        });

    }

});

app.listen(3000, () => {
    console.log("✅ Yoco server running on port 3000");
});