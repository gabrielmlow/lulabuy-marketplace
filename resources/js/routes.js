import VueRouter from 'vue-router';
import Index from './pages/Index';
import Shops from './pages/Shops';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Register from './components/auth/SignUp';
import Login from './components/auth/Login';
import Product from './pages/Product';
import Shop from './pages/Shop';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/shops',
        name: 'shops',
        component: Shops
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
        children: [
            {
                path: '/register',
                name: 'register',
                component: Register
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            }
        ]
    },
    {
        path: '/shops/:slug',
        name: 'shop',
        component: Shop
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product
    },
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;