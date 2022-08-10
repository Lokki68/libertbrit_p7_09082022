const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

// const -> Routes

const userRoutes = require("./Routes/users.routes");
const authRoutes = require("./Routes/auth.routes");
const postRoutes = require("./Routes/posts.routes");
const commentRoutes = require("./Routes/comment.routes");
const likeRoutes = require("./Routes/like.routes");
const adminRoutes = require("./Routes/admin.routes");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: [
    "sessionId",
    "Content-Type",
    "Origin",
    "X-Requested-With",
    "X-Auth-Token",
    "Content",
    "Accept",
    "Authorization",
  ],
  exposedHeaders: ["sessionId"],
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  preflightContinue: false,
};

app.use(cors(corsOptions)).use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app
  .use("/postsImage", express.static(path.join(__dirname, "postsImage")))
  .use("/profilImage", express.static(path.join(__dirname, "profilImage")));

app.use(express.json());

// Routes

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/like", likeRoutes);
app.use("/api/admin", adminRoutes);

// Exports -> app
module.exports = app;
