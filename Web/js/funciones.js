
function muestraTexto(){
    var elem = document.getElementById("parrafo1");
    elem.innerHTML = "Texto cambiado <strong>con negrita</strong>";    
}

function concatenaNombre(){
    var nombre= document.getElementById("nombre").innerHTML;
    var apellidos = document.getElementById("apellido").innerHTML;
    
    document.getElementById("nomrecompleto").innerHTML = nombre + " " + apellidos;
}

function resta(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var resultado = parseFloat(n1) - parseFloat(n2);
    
    document.getElementById("resultado").value = resultado;
}

function suma(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var resultado = parseFloat(n1) + parseFloat(n2);
    
    document.getElementById("resultado").value = resultado;
    
    
}

function Multiplicacion(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var resultado = parseFloat(n1) * parseFloat(n2);
    
    document.getElementById("resultado").value = resultado;
}

function Division(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var resultado = parseFloat(n1)  parseFloat(n2);
    
    document.getElementById("resultado").value = resultado;
}

function Exponente(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var resultado = parseFloat(n1)  parseFloat(n2);
    
    document.getElementById("resultado").value = resultado;
}

function Pares(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var resultado = parseFloat(n1)  parseFloat(n2);
    
    document.getElementById("resultado").value = resultado;
}


function muestracoches(){
    var coches = ("Renault", "Peugeot", "Citroen", "Ford");
    
    var texto = "<ul>";
    
    for(i=0;i<coches.length;i++){
        texto +="<li>" + coches[i] + "</li>";
    }
    
    texto += "</ul>";
    
    Document.getElementById("listadocoches").innerHTLM = texto;
    
}

function muestrapeso(){
    var peso = ("80", "100";"73","67","93","89","81");
    
    var texto = "<ul>";
    
    for(i=0;i<peso.length;i++>{
        texto +="<li>" + peso[i] + "</li>";
    }
    texto +="</ul>";
    
    Document.getElementById("listadocoches").innerHTML = texto;
    
}

function muestranota(){
    
    var nota = ("3","8","7","5","4.5","9","8","7","3.5","6","10","7","7.5");
    
    var texto = "<ul>";
    
    for
}

var sueldos= [
    {nombre:"Marta", sueldo:"1000"}
    {nombre:"Javier", sueldo:"3500"}
    {nombre:"Pepe"}, sueldo: "800"  
    {nombre:"Sandra" sueldo: "950"}
    {nombre:"Teresa" sueldo: "2700"}
    
    } 

$(document).ready(function() {
    $('#example').DataTable()"order":[[1,"desc"]];
} );
} );
    
$(document).ready(function() {
    $('#example').DataTable( {
        "language": {
            "lengthMenu": "Display _MENU_ records per page",
            "zeroRecords": "Nothing found - sorry",
            "info": "Showing page _PAGE_ of _PAGES_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
    } );
} );


var dataSet=[
    ["Javier",3500,100]
    ["Fran",2000,200]
    ["Ana",2750,100]
    
];

$(document).ready(function() {
    $('#ejemplo').DataTable( {
        data: dataSet,
        columns: [
            { title: "Nombre" },
            { title: "Sueldo" },
            { title: "Horas" },
            ]
    } );
} );




