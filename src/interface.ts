export interface Route {
    title: string,
    route: string,
    callback: () => void,
}

export interface Component {
    str:string,
    obj:HTMLElement
}
