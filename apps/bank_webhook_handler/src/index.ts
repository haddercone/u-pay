import express from "express";

const app = express();

app.post("/hdfcWebhook", (req, res) => {
    //TODO: Add zod validation here?
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    res.json({
        "message": "Hi"
    })
    // Update balance in db, add txn
})
app.get("/", (req, res) => {
    res.json({"message": "Hello"})
})

const port =  8080;

app.listen(port, () => console.log(`webhook running at port ${port}`));