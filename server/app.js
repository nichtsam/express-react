const express = require("express");
const ClientRouter = require("./routers/client-router");
const app = express();

app.use("/client", ClientRouter);

app.listen(3000);
