export default function render(
    element: HTMLElement,
    parent?: HTMLElement
): void {
    if (!parent)
        document.body.appendChild(element)
    else
        parent.appendChild(element)
}