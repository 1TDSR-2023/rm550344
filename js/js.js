let botao = document.getElementById("meu-btn")

botao.addEventListener('click', function () {
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");")
})