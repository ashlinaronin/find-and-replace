/* Prepare a regex statement with the word to find and turn on
** global and ignore case settings. Then run the replace function
** with that regex and replace any occurences with replacement. */
var findAndReplace = function(stringToSearch, wordToFind, replacement) {
    var regex = new RegExp('(' + wordToFind + ')', 'gi');
    return stringToSearch.replace(regex, replacement);
}
