import { resetCursor } from '../react/dispatcher'
import { setGlobalRender } from './rerenderer'
export default function render(
    element: Function,
    parent?: HTMLElement
): void {
    const doRender = () => {
        resetCursor()
        if (parent !== undefined) {
            parent.innerHTML = ''
            parent.appendChild(element())
        }
    }
    setGlobalRender(doRender)
    doRender()
}