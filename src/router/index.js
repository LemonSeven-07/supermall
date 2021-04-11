import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('views/home/Home.vue')
const Category = () =>
    import ('views/category/Category.vue')
const Cart = () =>
    import ('views/cart/Cart.vue')
const Profile = () =>
    import ('views/profile/Profile.vue')
    // const Detail = () =>
    //     import ('views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    // {
    //     path: '/detail/:iid',
    //     component: Detail
    // }
]

// 解决重复点击导航时，控制台出现报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
}

const router = new VueRouter({
    routes,
    mode: 'history',
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router