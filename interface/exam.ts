interface Label {
    label: string
}

function printLabel(label: Label): void {
    console.log(label.label)
}

let myObj = {
    size:10,
    label:'zengshide'
}

printLabel(myObj)