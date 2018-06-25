import BlogList from '../pages/BlogList'
import ArticleItem from '../pages/ArticleItem'
import ToDoWithRedux from '../components/ToDoListWithRedux'
import NotFound from '../pages/404'


export default [
    {
        path: '/',
        component: BlogList,
        exact: true
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
        path: '*',
        component: NotFound,
        exact: false
    }
]