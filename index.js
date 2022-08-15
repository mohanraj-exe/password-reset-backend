const express = require("express");
const dotenv = require("dotenv");
const connection = require("./shared");
const cors = require("cors");
const passwordResetRoutes = require("./routes/passwordReset.js");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

dotenv.config();
connection();
const app = express();
app.use(express.json())
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`...Port started listening at ${port}`)
})