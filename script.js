document.addEventListener('DOMContentLoaded', function(){
    let dia = document.getElementById('dia');
    let coordenadas = document.getElementById('coordenadas');

    fetch('http://worldclockapi.com/api/json/utc/now')   //Agarra el día (Domingo, Lunes, etc.)
    .then(response => response.json())
    .then(data => {
        dia.innerHTML = data.dayOfTheWeek
    })


    navigator.geolocation.getCurrentPosition((position) => { //Según Mozilla esta técnicamente es una API aunque no escribí un link
        coordenadas.innerHTML = (position.coords.latitude + "," + position.coords.longitude);  
      });
    });

    //Intente poner la hora de llegada y cambiar las coordenadas a una ubicación pero sin librerías era muy difícil ja
    //También lo hice en inglés porque sería raro que dijera "Feliz Sunday"