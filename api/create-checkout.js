export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                error: "Invalid amount"
            });
        }

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

        console.log("Yoco Response:", data);

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.status(200).json(data);

    } catch (error) {

        console.error("Server Error:", error);

        res.status(500).json({
            error: "Checkout creation failed"
        });
    }
}