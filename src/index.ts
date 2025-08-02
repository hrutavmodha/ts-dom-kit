import render from './react-dom/render'
import App from './test/jsx/App'
import { setRoutes } from './react-router/router'
import Home from './test/jsx/Home'
import About from './test/jsx/About'
const root = document.getElementById('root') as HTMLDivElement
export default root
render(App(), root)
setRoutes({
    '/': () => App(),
    '/about': () => About(),
    '/home': () => Home()
})