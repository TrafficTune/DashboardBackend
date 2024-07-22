if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express, { json } from "express";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();
//middleWares
app.set("view engine", "ejs");
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//socket.io
const server = require("http").createServer(app);

// using socket comunicatin for the chat.
server.listen(SOCKET_PORT, () => {
  console.log(`Socket Server is running on port ${SOCKET_PORT}`);
});

//routes
app.use("/intersection", require("./routes/intersections.routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
