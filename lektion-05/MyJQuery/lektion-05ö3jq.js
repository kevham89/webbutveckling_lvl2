// My jQuery Library
$(document).ready(function() {
    $("#submitBtn").on("click", function() {
        let namn = $(nameInput).val()
        $("#messageContainer").text(`Hejsan ${namn}!`)
        });
    });
