window.onload = function() {
    document.getElementById("azul").addEventListener("mouseover", function() {
         document.getElementById("title").style.color = "blue";
         document.getElementById("azul").style.backgroundColor ="green";
    });

    document.getElementById("amarelo").addEventListener("mouseout", function() {
        document.getElementById("title").style.color = "yellow";
   });

   document.getElementById("vermelho").addEventListener("mouseup", function() {
    document.getElementById("title").style.color = "red";
});
 }