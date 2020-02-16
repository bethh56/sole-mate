const printToDom = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId)
    selectedId.innerHTML = textToPrint
}

const footerBuilder = () => {
    let domString = "";
    domString += `Copyright &copy${innerHtml = new Date().getFullYear()}`
    printToDom("footer-text", domString);
}

const init = () => {
    footerBuilder();
}

init();