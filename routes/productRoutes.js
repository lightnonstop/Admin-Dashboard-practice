const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, removeProduct, addToWishlist, rating, uploadImages, deleteImages } = require('../controller/productControl');
const router = express.Router();
const { isAdmin, authVerify } = require('../middlewares/authMiddleware');

router.post('/', authVerify, isAdmin, createProduct);
router.get('/:id', getProduct);
router.put('/wishlist', authVerify, addToWishlist);
router.put('/rating', authVerify, rating);
router.put('/:id', authVerify, isAdmin, updateProduct);
router.delete('/:id', authVerify, isAdmin, removeProduct);
router.get('/', getAllProducts);

module.exports = router;
