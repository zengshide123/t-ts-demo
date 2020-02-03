class Control {
    private state: any
}
interface SelectableControl extends Control {
    select(): void
}
class Button extends Control implements SelectableControl {
    select() { }
}
// 报错 缺少私有属性 state
class ImageC implements SelectableControl {
    select() { }
}