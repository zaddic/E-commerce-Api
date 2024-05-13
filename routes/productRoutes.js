import express from "express";
import { getAllProducts , getProductById,createNewProduct,updateProduct,deleteProduct } from "../controllers/product.js";
const router = express.Router()





router.route('/products').get(getAllProducts);
router.route('/product').get(getProductById);
router.route('new/product').post(createNewProduct);
router.route('update').put(updateProduct);
router.route('delete').delete(deleteProduct);

export default router