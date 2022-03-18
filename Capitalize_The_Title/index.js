/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let words = [];
    for (let word of title.split(" ")) {
        word = word.toLowerCase();
        if (word.length > 2) {
            word = word[0].toUpperCase() + word.slice(1);
        }
        words.push(word);
    }
    return words.join(" ");
};
