import Dashboard from './pages/Dashboard';
import Order from './pages/Order';
import OrderDetail from './pages/OrderDetail'
import Technician from './pages/Technician';
import Customer from './pages/Customer';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Logout from './pages/Logout';
import DataSetup from './setup/DataSetup';
import PageNotFound from './pages/PageNotFound';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/orders',
        name: 'Order',
        component: Order,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/order-detail/:orderid',
        name: 'OrderDetail',
        component: OrderDetail,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/technicians',
        name: 'Technician',
        component: Technician,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/customers',
        name: 'Customer',
        component: Customer,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/user-profile',
        name: 'UserProfile',
        component: UserProfile,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: "/logout",
        name: 'Logout',
        component: Logout
    },
    {
        path: '/data-setup',
        name: 'DataSetup',
        component: DataSetup,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "*",
        name: 'PageNotFound',
        component: PageNotFound,
        meta: {
            requiresAuth: true,
        }
    }
]

export default routes
