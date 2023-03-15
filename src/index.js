require("dotenv").config();
port = process.env.PORT || 5000;
const express = require("express");
const dbConnect = require("../config/db");
const authRoutes = require("../routes/auth.routes");
const productsRoutes = require("../routes/products.routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// <<<<<<<<<<<<<<<<--- ROUTES --->>>>>>>>>>>>>>>
app.get("/", (req, res) => res.status(200).json("server running"));
app.use("/auth", authRoutes);
app.use("/products", productsRoutes);


app.listen(port, async () => {
  await dbConnect();
  console.log(`server started on port ${port}`);
});
