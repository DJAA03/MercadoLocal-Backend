import { Schema, model } from 'mongoose';

const ProductoSchema = new Schema({
  nombre: { type: String, required: true, trim: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true, index: true },
  imagen: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
}, { timestamps: true });

export const Producto = model('Producto', ProductoSchema);