let renderFn: (() => void) | null = null
export function setGlobalRender(fn: () => void) {
    renderFn = fn
}
export function triggerRender() {
    if (renderFn)
        renderFn()
}