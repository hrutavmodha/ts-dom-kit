function handleChildren(
    children: any,
    element: HTMLElement
): void {
    if (!children)
        return
    const nodes = Array.isArray(children) ? children : [children]
    nodes.forEach((child: any) => {
        if (
            typeof child === 'string' ||
            typeof child === 'number'
        ) {
            child = String(child)
            const text = document.createTextNode(child)
            element.appendChild(text)
        }
        if (child instanceof HTMLElement)
            element.appendChild(child)
        if (typeof child === 'function') {
            const node = child()
            element.appendChild(node)
        }
    })
}
export function createElement(
    tag: string,
    props?: { [key: string]: any }
): HTMLElement {
    const element = document.createElement(tag)
    for (let key in props) {
        if (key.startsWith('on'))
            element.addEventListener(key.substring(2), props[key])
        if (key == 'style')
            element.style = props[key]
        if (key == 'children') {
            handleChildren(props[key], element)
        }
    }
    return element
}