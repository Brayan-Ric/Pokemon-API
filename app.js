import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req);
    res.status(200).send("Hello world!");
})

app.post("/team/pokemons", () => {
    res.status(200).send("Hello world!");
})

app.get("/team", () => {
    res.status(200).send("Hello world!");
})


app.delete("/team/pokemons:pokeid", () => {
    res.status(200).send("Hello world!");
})

app.put("/team", () => {
    res.status(200).send("Hello world!");
})


app.listen(port, "127.0.0.1", () => {
    console.log("Server started at port 3000");
})

export { app };
