const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

connect(process.env.MONGO_URI)
  .then(
    app.listen(5000, () =>
      console.log(`server is running on ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));