window.onload = function(){
    document.getElementById("calcular").addEventListener("click", function(){
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;
        

        document.getElementById("result1").value = parseInt(num1) + parseInt(num2);
    })

    document.getElementById("num4").addEventListener("focusout", function(){
        num1 = document.getElementById("num3").value;
        num2 = document.getElementById("num4").value;

        document.getElementById("result2").value = parseInt(num1) - parseInt(num2);
    })
}