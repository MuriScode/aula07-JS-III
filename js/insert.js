function testAppendChild() {
    const paragrafo = document.createElement('p');
    paragrafo.textContent = 'Texto do parágrafo';

    const secao = document.querySelector(".paragrafos");
    secao.appendChild(paragrafo);
}

function testAppendPlany() {
    const section = document.querySelector("section.lista");
    const uList = document.createElement('ul');

    [1, 2, 3].forEach((item) => {
        const li = document.createElement("li");

        li.textContent = `Item ${item}`;
        uList.appendChild(li);
    });
    section.appendChild(uList);
}

function testInsterBefore() {
    const item = document.createElement("li");
    item.textContent = "Item 4";

    const lista = document.querySelector("section.lista ul");
    const terceiroItrem = lista.querySelector("li:nth-child(3)");
    lista.insert
}

testAppendPlany();
testAppendChild();