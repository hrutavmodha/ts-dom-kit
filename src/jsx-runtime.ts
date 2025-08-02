import { createElement } from './react/createElement'
export function jsx(type: any, props: any, key?: any) {
    return createElement(type, props, key)
}
export const jsxs = jsx
export const Fragment = (_: any, ...children: any) => children