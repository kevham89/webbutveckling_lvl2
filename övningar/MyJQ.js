$(document).ready(function(){
    $("#btn1").on("click", function(){
        let namn = $("#inputnamn").val();
        if (namn === "") {
            namn = "kompis";
        }
        $(".text").text(`Hejsan ${namn}!`).css("color", "red");
    });
    
    $("#btn2").on("click", function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200) {
                let xmlDoc = this.responseXML;
                let result = "<table border=1><tr><th>Titel</th><th>Författare</th></tr>"
                let böcker = xmlDoc.getElementsByTagName("bok");
                for (let i = 0; i < böcker.length; i++) {
                    var titel = böcker[i].getElementsByTagName("titel")[0].textContent;
                    var författare = böcker[i].getElementsByTagName("författare")[0].textContent;
                    result += `<tr><td>${titel}</td><td>${författare}</td></tr>`;
                }
                $("#result_table").html(`${result}</table>`);
            }
        };
        xhttp.open("GET", "data.xml", true);
        xhttp.send();
    });
});


