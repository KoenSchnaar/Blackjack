function maaktabel(){
    var width = 11;
    var height = 11;
    var tabel = document.getElementById("zeeslagtabel");

    for(x = 0; x < width; x++){
        var newRow = tabel.insertRow();
        newRow.classList.add("row");
    }
}