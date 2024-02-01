require("dotenv").config();
const express = require("express");
require("./config/db");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const baseRoutes = require("./routes/baseRoutes");
const authRouter = require("./routes/auth");
const cageRoutes = require("./routes/cageRoutes");
const mouseRoutes = require("./routes/mouseRoutes");
const { seedDataInitDB } = require("./repositories/seedFunctions");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const limiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 15 minutes
  limit: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: false, // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});
// Apply the rate limiting middleware to all requests.
app.use(limiter);

//limit size of the request
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

app.use((req, res, next) => {
  res.header({
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  next();
});
app.disable("x-powered-by");

// Inital DATA Seeding
seedDataInitDB();

// ENDPOINTS
app.use("/mice", mouseRoutes);
app.use("/cages", cageRoutes);
app.use("/auth", authRouter);
app.use("/", baseRoutes);

// PORT and server initialization
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`[***] Server listening on http://localhost:${PORT} [***]`);
});
