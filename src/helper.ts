export function addClassFromArray(elm: HTMLElement, c: string[]) {
    for (let a in c) {
        elm.classList.add(c[a]);
    }
}
