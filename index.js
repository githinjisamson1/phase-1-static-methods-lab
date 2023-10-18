class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize(string) {
    // words to remain in small caps
    const exceptWords = [
      "a",
      "an",
      "the",
      "and",
      "for",
      "but",
      "of",
      "at",
      "by",
      "from",
    ];

    // each letter to be an array item
    const splitString = string.split(" ");

    // empty to put final
    const titleized = [];

    // iterate splitString
    for (let i = 0; i < splitString.length; i++) {
      if (i === 0 || !exceptWords.includes(splitString[i].toLowerCase())) {
        // none of the letters in exceptWords
        titleized.push(
          splitString[i].charAt(0).toUpperCase() +
            splitString[i].slice(1).toLowerCase()
        );
      } else {
        // letter in exceptWords
        titleized.push(splitString[i].toLowerCase());
      }
    }
    return titleized.join(" ");
  }
}
