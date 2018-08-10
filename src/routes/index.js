import BlogList from '../pages/BlogList'
import Upload from '../pages/Upload'
import Galery from '../pages/Galery'

export default [
    {
        path: '/',
        component: BlogList,
        exact: true
    },
    {
        path: '/galery',
        component: Galery,
        exact: false
    },
    {
        path: '/upload',
        component: Upload,
        exact: false
    }
]