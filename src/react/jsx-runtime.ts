import { createElement } from './createElement'
export function jsx(type: any, props: any) {
    return createElement(type, props)
}
export const jsxs = jsx
export const Fragment = (_: any, ...children: any) => children