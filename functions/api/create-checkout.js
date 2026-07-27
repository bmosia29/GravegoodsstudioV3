export async function onRequestPost(context) {

    try {

        const { request, env } = context;

        const { amount } = await request.json();

        if (!amount || amount <= 0) {
            return Response.json(
                {
                    error: "Invalid amount"
                },
                {
                    status: 400
                }
            );
        }


        const response = await fetch(
            "https://payments.yoco.com/api/checkouts",
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${env.YOCO_SECRET_KEY}`,
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

            return Response.json(
                data,
                {
                    status: response.status
                }
            );

        }


        return Response.json(data);


    } catch(error) {


        console.error("Server Error:", error);


        return Response.json(
            {
                error: "Checkout creation failed"
            },
            {
                status:500
            }
        );

    }
}