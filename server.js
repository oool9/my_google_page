import express from "express";
import {join} from "path";

const app = express();
const __dirname = import.meta.dirname;

app.use(express.static(join(__dirname, "public")));

app.get("/", (_, res) => {
    error.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(4000, err => err ? console.error(err): console.log("Working... 4000"));