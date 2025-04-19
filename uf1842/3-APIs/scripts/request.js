async function getPuzzle(wordCount) {
    let hiddenSentence = "Buena suerte!";

    let response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    let data = await response.json();

    console.log(data);

    hiddenSentence = data.puzzle;

    return hiddenSentence;
}

