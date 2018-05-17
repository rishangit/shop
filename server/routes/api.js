const express = require('express');
const router = express.Router();

const userController = require('../controller/user_controller');
const loginController = require('../controller/login_controller');

router.post('/users/get', userController.getData);
router.post('/users', userController.saveData);
router.post('/login', loginController.login);
const shopInfoController = require('../controller/shop_info_controller');
router.post('/save_shop_info', shopInfoController.saveData);
router.post('/get_shop_info', shopInfoController.getData);
router.post('/list_shop_info', shopInfoController.listData);
const productsController = require('../controller/products_controller');
router.post('/save_product_from_server', productsController.saveData);
router.post('/list_product', productsController.listData);
router.post('/get_product', productsController.getData);
router.post('/remove_product', productsController.removeData);
const stocksController = require('../controller/stocks_controller');
router.post('/save_stock_item', stocksController.saveData);
router.post('/list_stock_item', stocksController.listData);
router.post('/get_stock_item', stocksController.getData);
router.post('/remove_stock_item', stocksController.removeData);
const syncController = require('../controller/sync_controller');
router.post('/save_sync_item', syncController.saveData);
router.post('/list_sync_item', syncController.listData);
router.post('/sync_item', syncController.syncData);
const productCategoryController = require('../controller/product_category_controller');
router.post('/save_product_catagory', productCategoryController.saveData);
router.post('/list_product_catagory', productCategoryController.listData);
router.post('/get_product_catagory', productCategoryController.getData);
const productManufactureController = require('../controller/product_manufacture_controller');
router.post('/save_product_manufacture', productManufactureController.saveData);
router.post('/list_product_manufacture', productManufactureController.listData);
router.post('/get_product_manufacture', productManufactureController.getData);
const productUnitController = require('../controller/product_unit_controller');
router.post('/save_product_unit', productUnitController.saveData);
router.post('/list_product_unit', productUnitController.listData);
router.post('/get_product_unit', productUnitController.getData);
const settingController = require('../controller/setting_controller');
router.post('/save_setting', settingController.saveData);
router.post('/update_setting', settingController.updateData);
router.post('/get_setting', settingController.getData);
router.post('/remove_setting', settingController.removeData);


module.exports = router;