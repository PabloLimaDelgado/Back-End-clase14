import { findAll, findById, createOne } from "../services/toys.service.js";

export const findToys = (req, res) => {
  const toys = findAll();
  if (!toys.length) {
    res.status().json({ message: "No toys" });
  }

  res.status(200).json({ message: "Toys found", toys });
};

export const findToyById = (req, res) => {
  const { idToy } = req.params;
  const toy = findById(+idToy);

  if (!toy) {
    return res.status(404).json({ message: "No toy found whit id provided" });
  }
  res.status(200).json({ message: "Toy found", toy });
};

export const createToy = (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    res.status(400).json({ message: "All field are required" });
  }

  const createdToy = createOne(req.body);
  res.status(200).json({ message: "Toy created", toy: createdToy });
};

//NAME - PRICE - STOCK
