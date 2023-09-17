import axios from 'axios';

const BASE_URL = 'localhost/api'; // Replace with your actual backend URL

const instance = axios.create({
    baseURL: BASE_URL,
});

export const api = {
    // Auth routes
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh-token',
    resetPassword: '/auth/reset-password',

    // Order routes
    getOrders: '/orders',
    getOrderById: (orderId:string) => `/orders/${orderId}`,
    createOrder: '/orders',
    updateOrderStatus: (orderId:string) => `/orders/${orderId}/status`,
    deleteOrder: (orderId:string) => `/orders/${orderId}`,

    // Product routes
    getProducts: '/products',
    getProductById: (productId:string) => `/products/${productId}`,
    createProduct: '/products',
    updateProduct: (productId:string) => `/products/${productId}`,
    deleteProduct: (productId:string) => `/products/${productId}`,
    addReview: (productId:string) => `/products/${productId}/reviews`,
    getProductCategories: '/products/categories',
    getProductsByCategory: '/products',
    searchProducts: '/products/search',
    addProductImages: (productId:string) => `/products/${productId}/images`,
    deleteProductImage: (productId:string, imageId:string) => `/products/${productId}/images/${imageId}`,

    // User routes
    getUserById: (userId:string) => `/users/${userId}`,
    updateUserById: (userId:string) => `/users/${userId}`,
    getUserOrders: (userId:string) => `/users/${userId}/orders`,
    getUserReviews: (userId:string) => `/users/${userId}/reviews`,
    getUserWishlist: (userId:string) => `/users/${userId}/wishlist`,
    deleteUserById: (userId:string) => `/users/${userId}`,
    getUsers: '/users',
    updateUserRole: (userId:string) => `/users/${userId}/role`,

    // Review routes
    getReviews: '/reviews',
    createReview: '/reviews',
    getReviewById: (reviewId:string) => `/reviews/${reviewId}`,
    updateReview: (reviewId:string) => `/reviews/${reviewId}`,
    deleteReview: (reviewId:string) => `/reviews/${reviewId}`,
};

export default api;
