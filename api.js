


function dameapi() {
fetch('https://api.datos.gob.mx/v1/calidadAire')
      .then((res) => res.json())
      .then((data) => console.log(data));

}
dameapi();
let body = ''
for (let i = 0; i<data-lenght; i++){
   body += '<tr><td> ${data[i].id</td></tr>'
}    
 document.getElementById('data').innerHTML = body