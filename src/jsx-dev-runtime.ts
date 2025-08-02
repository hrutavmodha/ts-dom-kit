import { jsx } from './jsx-runtime'
export { jsx, jsxs, Fragment } from './jsx-runtime'
export function jsxDEV(type: any, props: any, key?: any) {
    return jsx(type, props, key)
}