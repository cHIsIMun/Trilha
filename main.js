var btnMenu = false;
var main = document.querySelector('.main');

var url = "https://chisimun.github.io/Trilha/Levels/level1.html";//Sua URL
var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

console.log(xhttp.responseText);

function clear(tag){
    while (tag.firstChild) {
        tag.removeChild(tag.firstChild);
    }
}

function menu(){
    var top = document.getElementById('top');
    var mid = document.getElementById('mid');
    var mid_ = document.getElementById('mid_');
    var bot = document.getElementById('bot');
    var box = document.querySelector('.mbox');
    if(btnMenu){
        console.log(mid.style.transform);
        mid.style.transform = 'rotate(0deg)';
        mid_.style.transform = 'rotate(0deg)';
        top.style.opacity = 1;
        bot.style.opacity = 1;
        box.style.transform = 'translateY(700px)';
        box.style.position = 'fixed';
        box.style.opacity = 0;
        btnMenu = false;
    }
    else{
        mid.style.transform = 'rotate(45deg)';
        mid_.style.transform = 'rotate(-45deg)';
        top.style.opacity = 0;
        bot.style.opacity = 0;
        box.style.transform = 'translateY(0px)';
        box.style.position = 'absolute';
        box.style.opacity = 1;
        btnMenu = true;
    }
}
