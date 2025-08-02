import { getCursor, getHookState, setHookState } from '../dispatcher'
import { triggerRender } from '../../react-dom/rerenderer'
export default function useState(initialState: any): [any, Function] {
    const cursor = getCursor()
    if (getHookState(cursor) === undefined)
        setHookState(cursor, initialState)
    const setState = (newState: any): any => {
        setHookState(cursor, newState)
        triggerRender()
    }
    return [getHookState(cursor), setState]
}