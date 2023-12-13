    //Selectores html
    const boton = document.querySelector('#boton-cambiar-cita');
    const cita = document.getElementById('cita');
    const autor = document.getElementById('autor');
    
    //Generar un numero entero aleadotorio
    // sin incluir max en los valores posibles
    function numeroAleatorio(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    } 
    function cambiarCita(){        
        let indiceAleatorio = numeroAleatorio(0, citas.length);
        cita.innerText = `"${citas[indiceAleatorio].texto}"`;
        autor.innerHTML = `${citas[indiceAleatorio].autor}`;          
    }
    
    //Cambiar cita, al dar click al btn
    boton.addEventListener('click',cambiarCita);
    