const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
require("dotenv").config();

app.use(express.static("./public"));
app.use(express.json());

app.use((req, res, next) => {
    console.log("A request was made.");
    next();
});

app.use("/api/v1/tasks", tasks);
app.use(errorHandler);
app.use(notFound);

async function start() {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connected to the DB.");
        app.listen(port, () => {
            console.log(`Listening on port ${port}...`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

start();
