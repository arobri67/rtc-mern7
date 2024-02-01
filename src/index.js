require("dotenv").config();
const express = require("express");
require("./config/db");
const baseRoutes = require("./routes/baseRoutes");
const authRouter = require("./routes/auth");
const cageRoutes = require("./routes/cageRoutes");
const mouseRoutes = require("./routes/mouseRoutes");
const { seedDataInitDB } = require("./repositories/seedFunctions");

const app = express();
app.use(express.json());

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
