import { ProductsService } from '../services/products/products.service.js';
import { AppError } from '../errors/appError.js';

const service = new ProductsService();

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await service.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err instanceof AppError ? err : new AppError(err.message, 500));
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.getProductById(id);
    res.json(product);
  } catch (err) {
    next(err instanceof AppError ? err : new AppError(err.message, 500));
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const created = await service.createProduct(productData);
    res.status(201).json(created);
  } catch (err) {
    next(err instanceof AppError ? err : new AppError(err.message, 500));
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
};
