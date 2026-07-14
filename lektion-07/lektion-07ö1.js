document.getElementById("knapp1").addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            document.getElementById("container1").innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'lektion-07ö1.txt', 'true'); 
    xhr.send();
})