import Express from "express";
import products from "./products.js";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(
  Express.urlencoded({
    extended: true,
  })
);

// GET, PUT, POST, DELETE

app.get("/", (req, res) => {
  /* res.send("Hello World"); */
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  res.json(
    products.find((product) => {
      return +req.params.id === product.id;
    })
  );
  /* res.send(req.params); */
  /* res.json(products); */
});

app.post("/add", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
