import { Request, Response } from 'express';
import { Producto } from '../models/producto.model';

export const getProducts = async (req: Request, res: Response) => {
  const products = await Producto.find();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { nombre, descripcion, precio, categoria, imagen, stock } = req.body;
  const newProduct = new Producto({ nombre, descripcion, precio, categoria, imagen, stock });
  await newProduct.save();
  res.status(201).json(newProduct);
};