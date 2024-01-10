const contenedor = document.getElementById("contenedor")
let mensaje = document.getElementById("mensaje")
let contenedorInput = document.getElementById("contenedorDos")
let mensajeOffline = document.getElementById("mensaje_offline")
let JuegoInicio = 15
let JuegoFin = 40
let key = []
let imagenes
let descripcion
let correctas = 0
let incorrectas = 0 
let animales = [
    {
        "descripcion" : "Perro",
        "img" : "descarga.jpg",
    },
    {
        "descripcion" : "Gato",
        "img" : "gato.jpg",  
    },
    {
        "descripcion" : "Conejo",
        "img" : "conejo.jpg",  
    },
    {
        "descripcion" : "Vaca",
        "img" : "vaca.jpg",  
    },
    {
        "descripcion" : "Gallo",
        "img" : "gallo.jpg",  
    },
    {
        "descripcion" : "Leon",
        "img" : "leon.jpg",  
    },
    {
        "descripcion" : "Cebra",
        "img" : "cebra.jpg",  
    },
    {
        "descripcion" : "Jirafa",
        "img" : "jirafa.jpg",  
    }
]
let largo = animales.length
window.addEventListener("offline",function(){
        mensajeOffline.innerHTML = " <strong> Sin conexion a internet </strong>"
	
})

for (let animal of animales) {
    let aleatorio = Math.floor(Math.random() * largo)
    key.push(animales[aleatorio].descripcion.toLowerCase())
    imagenes = `<img src="img/${animales[aleatorio].img}">`
   descripcion = "<p>"+`${animales[aleatorio].descripcion}`+"</p>"
    contenedor.insertAdjacentHTML('beforeend', imagenes)
    contenedor.insertAdjacentHTML('beforeend', descripcion)
    }
    let JuegoComienzo = setInterval(function () {
        if(JuegoInicio < 10){
             JuegoInicio = 0 +""+JuegoInicio 
        }
             if (JuegoInicio == 0) {
                contenedor.style.display = "none"
                contenedorInput.style.display = "block"
                mensaje.innerHTML = `<strong>El juego finaliza en ${JuegoFin} segundos</strong>`
                if (JuegoFin == 0 ) {
                    clearInterval(JuegoComienzo)
                  swal("Tiempo terminado", {
                    buttons: {
                      cancel: "Cerrar juego",
                      catch: {
                        text: "Reiniciar juego",
                          value: "catch",
                      },
                    },
                  })
                  .then((value) => {
                    switch (value) {     
                      case "catch":
                        location.reload()
                        break;
                      default:
                        close()
                    }
                  });  
                }else{
                 JuegoFin--
                }
                if (JuegoFin < 10) {
                    JuegoFin = 0 +""+JuegoFin
                }
             }else{
                 mensaje.innerHTML = `<strong>El juego inicia en ${JuegoInicio} segundos</strong>`
                JuegoInicio--
             }
            },1000) 
        function juego40 () {
            let campo1 = document.getElementById("inputUno").value
            let campo2 = document.getElementById("inputDos").value
             let campo3 = document.getElementById("inputTres").value
             let campo4 = document.getElementById("inputCuatro").value
             let campo5 = document.getElementById("inputCinco").value
             let campo6 = document.getElementById("InputSeis").value
             let campo7 = document.getElementById("InputSiete").value
             let campo8 = document.getElementById("InputOcho").value 
             let campos = [campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8]
             for (let i = 0; i < campos.length; i++) {
                 if (campos[i].toLowerCase() === key[i]) {
                    correctas+= 1   
                 } else {
                    incorrectas += 1   
                 }
                }
                if (correctas > incorrectas) {
                  clearInterval(JuegoComienzo)
                  swal({
                      icon: "success",
                      title: "Partida ganada",        
                  }) 
                  .then(() => {
                    swal({
                      text: `Correctas : ${correctas}, Incorrectas : ${incorrectas}`,
                      button: true,
                     
                    })
                    .then(() => {
                      swal("Desea volver a jugar", {
                        buttons: {
                          cancel: "Cerrar juego",
                          catch: {
                            text: "Si",
                              value: "catch",
                          },
                        },
                      })
                      .then((value) => {
                        switch (value) {     
                          case "catch":
                            location.reload()
                            break;
                          default:
                            close()
                        }
                      }); 
                    });
                     })
                 }else if(correctas < incorrectas){
                  clearInterval(JuegoComienzo)
                  swal({
                      icon: "error",
                      title: " Partida perdida",
                  }) 
                  .then(() => {
                    swal({
                      text: `Correctas : ${correctas}, Incorrectas : ${incorrectas}`,
                      button: true,
                     
                    })
                    .then(() => {
                      swal("Desea volver a jugar", {
                        buttons: {
                          cancel: "Cerrar juego",
                          catch: {
                            text: "Si",
                              value: "catch",
                          },
                        },
                      })
                      .then((value) => {
                        switch (value) {     
                          case "catch":
                            location.reload()
                            break;
                          default:
                            close()
                        }
                      }); 
                    });
                     })
                 }else{
                  clearInterval(JuegoComienzo)
                  swal({
                      icon: "warning",
                      title: "Empate",
                  })
                  .then(() => {
                    swal({
                      text: `Correctas : ${correctas}, Incorrectas : ${incorrectas}`,
                      button: true,
                     
                    })
                    .then(() => {
                      swal("Desea volver a jugar", {
                        buttons: {
                          cancel: "Cerrar juego",
                          catch: {
                            text: "Si",
                              value: "catch",
                          },
                        },
                      })
                      .then((value) => {
                        switch (value) {     
                          case "catch":
                            location.reload()
                            break;
                          default:
                            close()
                        }
                      }); 
                    });
                     }) 
                 }
                }
  
             
    

    
       
