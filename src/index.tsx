import render from './react-dom/render'
import App from './test/App'
import { setRoutes } from './react-router/router'
import Home from './test/Home'
const root = document.getElementById('root') as HTMLDivElement
export default root
render(<App />, root)
setRoutes({
    '/': App,
    '/home': Home
})