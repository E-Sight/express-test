import Express from "express";
import products from "./products.js";
import { OperatorXOR } from "./ia.js";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(
  Express.urlencoded({
    extended: true,
  })
);

//MIDDLEWARE
function mid(req, res, next) {
  console.log(req.query);
  console.log(req.params);
  next();
}

// GET, PUT, POST, DELETE

app.get("/products/", (req, res) => {
  /* res.send("Hello World"); */
  res.json(products);
});

app.get("/products/:id", mid, (req, res) => {
  res.json(
    products.find((product) => {
      return +req.params.id === product.id;
    })
  );
  /* res.send(req.params); */
  /* res.json(products); */
});

app.post("/products/add/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.post("/ia/input/", (req, res) => {
  try {
    console.log("ia post", req.body);
    const data = req.body;
    const result = OperatorXOR(data);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
