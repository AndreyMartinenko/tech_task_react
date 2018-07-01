import BlogList from '../pages/BlogList'
import ArticleItem from '../pages/ArticleItem'
import ToDoWithRedux from '../components/ToDoListWithRedux'
import NotFound from '../pages/404'
import MyPage from '../pages/myPage'
import Login from '../pages/Auth/Login'

export default [
    {
        path: '/',
        component: BlogList,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: false
    },
    {
        path: '/toDo',
        component: ToDoWithRedux,
        exact: false
    },
    {
        path: '/article/create',
        component: ToDoWithRedux ,
        exact: false
    },
    {
        path: '/article/:id',
        component: ArticleItem,
        exact: false
    },
    {
        path: '/about',
        component: MyPage,
        exact: false
    },
    {
        path: '*',
        component: NotFound,
        exact: false
    }
]