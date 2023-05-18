function obtenerFecha() {
    var fecha = document.getElementById("fecha").value;
    alert("La fecha seleccionada es: " + fecha);
}

var select = document.querySelector('.styled-select select');
    select.addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    console.log(selectedOption.value);
    });;