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
    tag: any,
    props?: { [key: string]: any }
): any {
    if (typeof tag === 'function')
        return tag(props)
    const element = document.createElement(tag)
    for (let key in props) {
        if (key.startsWith('on'))
            element.addEventListener(key.substring(2), props[key])
        else if (key == 'style')
            element.style = props[key]
        else if (key == 'children')
            handleChildren(props[key], element)
        else
            element.setAttribute(key, props[key])
    }
    let vdom = JSON.stringify({
        // @ts-ignore
        tag,
        ...props
    })
    console.log('VDOM is:\n', vdom)
    return element
}