import { AppError } from '../../errors/appError.js';
import axios from 'axios';

export class ProductsService {
    constructor() {
        this.baseUrl = process.env.FAKE_STORE_BASE_URL;

        if (!this.baseUrl) {
            throw new AppError('La variable de entorno FAKE_STORE_BASE_URL no está definida', 500);
        }
    }

    async getAllProducts() {
        try {
            const response = await axios.get(`${this.baseUrl}/products`);
            return response.data;
        } catch (error) {
            throw new AppError('Error al obtener los productos', 500);
        }
    }

    async getProductById(id) {
        try {
            const response = await axios.get(`${this.baseUrl}/products/${id}`);
            return response.data;
        } catch (error) {
            throw new AppError(`Error al obtener el producto con ID ${id}`, 500);
        }
    }

    async createProduct(productData) {
        try {
            const response = await axios.post(`${this.baseUrl}/products`, productData);
            return response.data;
        } catch (error) {
            throw new AppError('Error al crear el producto', 500);
        }
    }
}