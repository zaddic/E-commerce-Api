import { products } from "../models/productdb.js";
export const getAllProducts =  function(req, res){
    res.send(products);
  }
  export const getProductById = function(req, res){
    res.send(products);
  }
  export const createNewProduct =  function(req, res){
    res.send(products);
  }
  export const updateProduct =  function(req, res){
    res.send(products);
  }
  export const deleteProduct =  function(req, res){
    res.send(products);
  }