$(document).ready(function() {
    $("form#find-and-replace").submit(function(event) {
        var stringToSearch = $("input#stringToSearch").val();
        var wordToFind = $("input#wordToFind").val();
        var replacement = $("input#replacement").val();

        var newString = findAndReplace(stringToSearch, wordToFind, replacement);

        $("#result").text(newString);
        $("#result").show();

        // Prevent the form submit from automatically trying to go to another page
        event.preventDefault();
    });
});
