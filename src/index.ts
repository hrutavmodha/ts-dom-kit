import createElement from './react/createElement'
import render from './react-dom/render'
const root = document.getElementById('root') as HTMLDivElement
const element = createElement(
    'h1', {
        id: 'heading'
    },
    'Hello World'
)
render(element, root)