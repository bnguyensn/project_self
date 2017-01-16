const fs = require('fs');

// ===== *** INITIALISER *** ===== \\

let anagramDictionary;
let dictionaryOpened = false;

openDictionary();

// Open dictionary
function openDictionary() {
    try {
        anagramDictionary = require('../server_resources/enable1-ang.json');
        dictionaryOpened = true;
        console.log('Dictionary opened successfully.');
    } catch (err) {
        console.log(err);
    }
}

// ===== *** ANAGRAM SOLVER *** ===== \\

function solveAnagram(q, m) {
    if (m) {
        solveMultiwordAnagram(q)
    } else {
        return solveSinglewordAnagram(q);
    }
}

// Multi-word anagram logic

function solveMultiwordAnagram(q) {

    // TODO: update this

    // 1. Split and sort the query alphabetically into an array of letters.
    let qry = q.split('').sort().join('');

    return q + '!!!'
}

// Single-word anagram logic

function solveSinglewordAnagram(q) {

    // 1. Split and sort the query alphabetically into an array of letters. Then re-join them as a string.
    let qry = q.split('').sort().join('');

    // 2. Check if the anagram dictionary has the query. Else return an empty string.
    if (anagramDictionary.hasOwnProperty(qry)) {

        // We return the matching entry in the anagram dictionary.
        return anagramDictionary[qry];
    }

    // We return an empty array if no results are found.
    return []
}

// ===== EXPORT ===== \\

module.exports = {
    solveAnagram
};