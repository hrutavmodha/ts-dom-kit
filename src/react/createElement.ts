export default function createElement(
    tag: string,
    props?: { [key: string]: any },
    ...children: any
): HTMLElement {
    const element = document.createElement(tag)
    for (let key in props) {
        if (key.startsWith('on'))
            element.addEventListener(key.substring(2), props[key])
        else if (key == 'style')
            element.style = props[key]
        else
            element.setAttribute(key, props[key])
    }
    children.forEach((child: any) => {
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
    return element
}