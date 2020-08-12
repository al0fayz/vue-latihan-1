//auth 
import Login from './components/auth/Login.vue';

//user
import DashboardUser from './components/dashboard/user/Dashboard.vue';

export const myRoutes = [
    {
        path: '/login',
        component: Login
    },
    //user
    {
        path: '/user/dashboard',
        component: DashboardUser
    },
];