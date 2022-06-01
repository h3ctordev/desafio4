const express = require("express");
const router = express.Router();
const Products = require("../utils/products");

const productInit = [
  {
    id: 1,
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    id: 2,
    title: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    id: 3,
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
  {
    id: 4,
    title: "Lata Bebida",
    price: 123.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
];

const products = new Products([...productInit]);

router.get("/productos", (req, res) => {
  console.log("Get all products");
  res.status(200).json(products.getAll());
});

router.get("/productos/:id", (req, res) => {
  console.log("Get products by id");
  const { id } = req.params;
  res
    .status(200)
    .json(products.getById(id) || { error: "producto no encontrado" });
});

router.post("/productos", (req, res) => {
  console.log("Create products");
  if (!req.body?.title || !req?.body?.price || !req?.body?.thumbnail) {
    res.status(400).json({ message: "Faltaron parametros" });
  }
  res.status(200).json(products.save(req.body));
});

router.put("/productos/:id", (req, res) => {
  console.log("Update products");
  const { id } = req.params;
  res.status(200).json(
    products.update(id, { ...req.body }) || {
      message: `Se actualizo el producto id: ${id}`,
    }
  );
});

router.delete("/productos/:id", (req, res) => {
  console.log("Delete products");
  const { id } = req.params;
  res
    .status(200)
    .json(products.delete(id) || { message: `Se borró el producto id: ${id}` });
});

module.exports = router;
