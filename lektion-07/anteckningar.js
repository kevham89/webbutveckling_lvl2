// 1.Skapa ett object
// xhr kallas för OBJECT i det här fallet.
var xhr = new XMLHttpRequest();

// 2. Callback-function OBJEKT.EGENSKAP
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200){ // 4 = vi har skickat begäran till servern utan problem & 200 = server har skickat tillbaka OK
        console.log(xhr.responseText);
    }
}

// 3. Öppna en anslutning:
//true säger att det ska vara asynkront
xhr.open('GET', 'URL_TO_RESOURCE', 'true'); 

//4. Skicka begäran
xhr.send();


/*
READYSTATES:
0 (UNSENT): The request has been created, but open() has not been called yet.
1 (OPENED): open() has been called, but send() has not.
2 (HEADERS_RECEIVED): send() has been called, and headers/status are available.
3 (LOADING): Downloading; response text holds partial data.
4 (DONE): The operation is completely finished.
*/

