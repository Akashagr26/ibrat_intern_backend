require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

const PORT = process.env.PORT || 4000;

//database
connectDB();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products/get", productRoutes);

app.get("/", (req, res) => {
  res.status(201).json({ messge: "server created" });
});

app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
