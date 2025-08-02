import root from '..'
let routes: { [key: string]: () => HTMLElement } = {}
export function setRoutes(
    mapper: { [key: string]: () => HTMLElement }
): void {
    routes = mapper
}
export function navigate(
    path: string
): void {
    window.history.pushState({}, '', path)
    renderRoute()
}
function renderRoute(): void {
    const path = window.location.pathname
    console.log(`The current path received is: ${path}`)
    const component = routes[path]
    root.innerHTML = ''
    if (component && component() instanceof HTMLElement)
        root.appendChild(component())
    else
        root.innerHTML = `<h1>404</h1><br/><p>Route not found: ${path}</p>`
}
window.addEventListener('popstate', () => {
    renderRoute()
})