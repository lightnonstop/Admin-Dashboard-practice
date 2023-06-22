const express = require('express');
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser, unblockUser, blockUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, removeCart, applyCoupon, createOrder, getOrders, getAllOrders, updateOrderStatus, getOrderByUserId, removeItemFromCart, updateItemQtyFromCart } = require('../controller/userControl');
const { isAdmin, authVerify } = require('../middlewares/authMiddleware');
const router = express.Router();
//   removeCart,
//   applyCoupon,
//   getOrders,
//   updateOrderStatus,
//   getAllOrders,
//   getOrderByUserId,
// router.get('/get-orders', authVerify, getOrders);
// router.get('/getallorders', authVerify, getAllOrders);
// router.get('/get-order-by-user/:id', authVerify, getOrderByUserId);
router.get('/all-users', getAllUsers);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logoutUser);
router.get('/wishlist', authVerify, getWishlist);
router.get('/cart', authVerify, getUserCart);

router.get('/:id', authVerify , isAdmin ,  getUser);

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.post('/cart', authVerify, userCart);
router.post('/forgot-password-token', forgotPasswordToken);
// router.post('/cart/apply-coupon', authVerify, applyCoupon);
router.post('/checkout/create-order', authVerify, createOrder);

// router.delete('/remove-cart', authVerify, removeCart);
router.delete('/:id', deleteUser);
router.delete('/cart/remove-cart-item/:id', authVerify, removeItemFromCart);
router.put('/cart/update-cart-item-qty/:id/', authVerify, updateItemQtyFromCart);

router.put('/:edit-user', authVerify, updateUser);
router.put('/save-address', authVerify, saveAddress);
router.put('/reset-password/:token', resetPassword);
router.put('/password', authVerify, updatePassword);

router.put('/block-user/:id', authVerify, isAdmin, blockUser);
router.put('/unblock-user/:id', authVerify, isAdmin, unblockUser);
// router.put('/order/update/:id', authVerify, isAdmin, updateOrderStatus);



module.exports = router;
