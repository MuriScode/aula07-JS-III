function selectById() {
    const titulo = document.getElementById("titulo");
    console.log(titulo);
}

function selectByClass() {
    const paragrafo = document.getElementsByClassName("paragrafo");
    console.log(paragrafo);
}

function selectByElementName() {
    const items = document.getElementsByTagName("li");
    console.log(items);
}

function testQuerySelector() {
    const paragrafo = document.querySelector("p.paragrafo");
    console.log(paragrafo);
}

function testQuerySelectorAll() {
    const paragrafo = document.querySelectorAll("p.paragrafo");
    console.log(paragrafo);
}

testQuerySelectorAll();
testQuerySelector();
selectByElementName();
selectById();
selectByClass();