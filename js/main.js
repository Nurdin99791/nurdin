$(document).ready(function(){
    Bersihkan();
});

function Bersihkan() {
    document.getElementById("kalimat").value = "";
    document.getElementById("kalimat_soal").innerHTML = "-";
    document.getElementById("hasil_tokenize").innerHTML = "";
	document.getElementById("terdeteksi").innerHTML = "";
    document.getElementById("hasil").style.display = "none";
}

function Tokenizkan() {
    var kalimat = document.getElementById("kalimat").value;
    document.getElementById("hasil").style.display = "block";
    document.getElementById("kalimat_soal").innerHTML = kalimat;

    var ptrn = /[a-zA-Z_][a-zA-Z0-9_]*|[a-zA-Z_][a-zA-Z0-9_]*\d+|\d+|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    var res_array = kalimat.match(ptrn);
    var text = "";
    var i;
    for (i = 0; i < res_array.length; i++) {
        text += '"' + res_array[i] + '"';
      }
	document.getElementById("terdeteksi").innerHTML = "Terdeteksi ada " + i + " kata";
    document.getElementById("hasil_tokenize").innerHTML = text.replace(/""/g, '", "');
}
