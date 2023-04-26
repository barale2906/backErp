import {Router} from 'express'
import { activProducto, createProducto, getcode, getDetalleFactura, getInventarioLP, getListaPrecios, getProducto, getproductomaxId, getProductos, updateProducto } from '../controllers/producto.controller.js';




const router = Router();
  
  // Routes
  router.post("/", createProducto);
  router.get("/", getProductos);
  router.put("/:id", updateProducto);
  router.delete("/:id/:status", activProducto);
  router.get("/:id", getProducto);

  router.get("/:bodega/precios", getListaPrecios); // muestra el listado de productos incluyendo el encabezado de la lista de precios

  router.get("/:encab/lp", getInventarioLP); // muestra los productos cargados a la lista de precios

  router.get("/:fact/detalle", getDetalleFactura); // muestra los productos cargados a una factura

  router.get("/:code/code", getcode); // Verifica la existencia de un producto por código de barras

  router.get("/1/max", getproductomaxId); // Obtiene el máximo Id de los productos
  
export default router;