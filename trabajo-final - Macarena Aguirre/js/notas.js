
    function mostrarNota(){
        let notas = document.getElementById("notas").value;
        let mostrar = document.querySelector(".mostrarNotas");
        mostrar.innerHTML += "<div>" + "- " + notas + "" + "</div>";
        document.getElementById("notas").value= "";
    }

   
     let textoEscuchado = false;

     function hablar(){
        let texto = document.getElementById("libroCompleto").textContent;
        if(textoEscuchado){
            speechSynthesis.cancel();
            speechSynthesis.speak(new SpeechSynthesisUtterance("escucha detenida"));
        }else{
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        }
        textoEscuchado = !textoEscuchado;
     }

     let textoAumentado = false;

     function aumentarTamanioTexto(){
        let texto = document.getElementById("libroCompleto");
        if (textoAumentado) {
            texto.style.fontSize = "1em"; // Reducir el tamaño del texto
        } else {
            texto.style.fontSize = "1.5em"; // Aumentar el tamaño del texto
        }
        textoAumentado = !textoAumentado; // Alternar el estado
     }

     
      /*Evento para resaltar parrafos*/
      document.addEventListener('DOMContentLoaded', () => {
        const parrafo = document.getElementById('libroCompleto');
        parrafo.addEventListener('mouseup', () => {
            const selection = window.getSelection();
            if (selection.toString()) {
                const range = selection.getRangeAt(0);
                const span = document.createElement('span');
                span.classList.add('highlight');
                span.textContent = selection.toString();
                range.surroundContents(span);
            }
        });
    });

