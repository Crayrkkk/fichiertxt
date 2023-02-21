var btn = document.getElementById("btn");
var textarea = document.getElementById("text");
var input = document.getElementById("nom-fichier");

btn.addEventListener("click", function () {
    var file = input.value;
    var text = textarea.value;
    var blob = new Blob([text], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = file;
    a.click();
});