var texto_criptografado = ""
var texto_descriptografado = ""

window.onload = function() {
    document.getElementById("dc-input").value = "";
} 


function criptografar(texto) {
    const campo_resultado = document.getElementsByClassName("campo-resultado");
    const img_404 = document.getElementsByClassName("img-404");
    const not_found = document.getElementsByClassName("not_found");
    const copy_button = document.getElementsByClassName("copy-button");
    const resultado_decodificado = document.getElementsByClassName("resultado-decodificado");
    const resultado = document.getElementById("resultado");

    if (document.getElementById('dc-input').value != "") {

        let letrasCriptografadas = {
            e: 'enter',
            i: 'imes',
            a: 'ai',
            o: 'ober',
            u: 'ufat'
        };

        let novoTexto = '';

        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i];

            if (letrasCriptografadas.hasOwnProperty(letra)) {
            novoTexto += letrasCriptografadas[letra];
            } else {
            novoTexto += letra;
            }
        }

        texto_criptografado = novoTexto
        
        campo_resultado[0].style.display = "inline-block";
        img_404[0].style.display = "none";
        not_found[0].style.display = "none";
        resultado_decodificado[0].style.display = "inline-block";
        resultado.innerHTML = texto_criptografado;

        if (window.innerWidth > 810) {
            copy_button[0].style.display = "inline-block";
        } else {
            copy_button[0].style.display = "block";
        }

        if (window.innerWidth < 480) {
            campo_resultado[0].style.padding = '32px';
        }

    } else {
        if (window.innerWidth > 810) {
            img_404[0].style.display = "inline-block";
        } 

        if (window.innerWidth < 480) {
            campo_resultado[0].style.padding = '0';
        }

        campo_resultado[0].style.display = "flex";
        not_found[0].style.display = "inline-block";
        copy_button[0].style.display = "none";
        resultado_decodificado[0].style.display = "none";
        resultado.innerHTML = "";
    }
}

function descriptografar(textoCriptografado) {
    if (textoCriptografado == "") {
        textoCriptografado = document.getElementById('dc-input').value
    }

    const campo_resultado = document.getElementsByClassName("campo-resultado");
    const img_404 = document.getElementsByClassName("img-404");
    const not_found = document.getElementsByClassName("not_found");
    const copy_button = document.getElementsByClassName("copy-button");
    const resultado_decodificado = document.getElementsByClassName("resultado-decodificado");
    const resultado = document.getElementById("resultado");

    if (document.getElementById('dc-input').value != "") {

        let letrasCriptografadas = {
            enter: 'e',
            imes: 'i',
            ai: 'a',
            ober: 'o',
            ufat: 'u'
            };
        
        let novoTexto = '';
        
        let palavras = textoCriptografado.split(/(enter|imes|ai|ober|ufat)/);
    
        for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];
    
        if (letrasCriptografadas.hasOwnProperty(palavra)) {
            novoTexto += letrasCriptografadas[palavra];
        } else {
            novoTexto += palavra;
            }
        }
    
        texto_descriptografado = novoTexto

        campo_resultado[0].style.display = "inline-block";
        img_404[0].style.display = "none";
        not_found[0].style.display = "none";
        resultado_decodificado[0].style.display = "inline-block";
        resultado.innerHTML = texto_descriptografado;

        if (window.innerWidth > 810) {
            copy_button[0].style.display = "inline-block";
        } else {
            copy_button[0].style.display = "block";
        }

        if (window.innerWidth < 480) {
            campo_resultado[0].style.padding = '32px';
        }

    } else {
        if (window.innerWidth > 810) {
            img_404[0].style.display = "inline-block";
        } 
        
        if (window.innerWidth < 480) {
            campo_resultado[0].style.padding = '0';
        }

        campo_resultado[0].style.display = "flex";
        not_found[0].style.display = "inline-block";
        copy_button[0].style.display = "none";
        resultado_decodificado[0].style.display = "none";
        resultado.innerHTML = "";
    }
}

function copy(texto) {
    navigator.clipboard.writeText(texto)
}
