interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void
}
class Handler {
    type: string | undefined
    onClickBad = (e: Event) => {
        this.type = e.type
    }
}

let h = new Handler
let uiElement: UIElement = {
    addClickListener() { }
}
uiElement.addClickListener(h.onClickBad)