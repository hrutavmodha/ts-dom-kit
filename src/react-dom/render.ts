export default function render(
    element: HTMLElement,
    parent?: HTMLElement
) {
    if (typeof parent === 'undefined')
        document.body.appendChild(element)
    else
        parent.appendChild(element)
}