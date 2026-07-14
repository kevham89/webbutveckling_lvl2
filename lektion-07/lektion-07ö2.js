document.getElementById("btn1").addEventListener("click", function() {
    // create object
    var xmlc = new XMLHttpRequest();
    // call back
    xmlc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        myFunction(this.responseXML);
    }
    xmlc.open("GET", "lektion-07ö2.xml", true);
    xmlc.send();

});

function myFunction(xmlDoc) {
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    var cds = xmlDoc.getElementsByTagName("CD");
    for (let i = 0; i < cds.length; i++) {
        var artist = cds[i].getElementsByTagName("ARTIST")[0].textContent; 
        var title = cds[i].getElementsByTagName("TITLE")[0].textContent;
        table += `<tr><td>${artist}</td><td>${title}</td></tr>`;
    }
    document.getElementById("table1").innerHTML = table;
}