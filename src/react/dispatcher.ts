let hookStates: any[] = []
let hookCursor = 0
export function resetCursor() {
    hookCursor = 0
}
export function getCursor() {
    return hookCursor++
}
export function getHookState(index: number) {
    return hookStates[index]
}
export function setHookState(
    index: number,
    value: any
) {
    hookStates[index] = value
}