function modifyContent() {
    var locDeMunca = document.getElementById("nume");
    locDeMunca.innerHTML = "Inginer DevOps at Apple Inc.";

    var realizari = document.getElementById("lista_pas");
    realizari.innerHTML = "Realizările pe care dores să le obțin:";

    var realizarea1 = document.getElementById("pas1");
    realizarea1.innerHTML = "Participarea la diverse IT-proiecte";

    var realizarea2 = document.getElementById("pas2");
    realizarea2.innerHTML = "Cunoștințe aprofundate în domeniul arhitecturii calculatoarelor";

    var realizarea3 = document.getElementById("pas3");
    realizarea3.innerHTML = "Elaborarea propriilor articole științifice";

    var ul_width = document.getElementById("list");
    ul_width.style.width = '400px';

    var img_alternativa = document.getElementById("img_de_profil");
    img_alternativa.src = '/img/nebula.jpg';
    img_alternativa.style.opacity = '0.8';
    img_alternativa.style.border = '4px dashed darkblue';

    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'lightgray';

    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = 'darkblue';
    }

    var headings = document.getElementsByTagName('h2');
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.color = 'darkblue';
    }
  }