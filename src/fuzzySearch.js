var fuzzySearch = function(input, dictionary){
  /* implement me! */
  var result;
  if (input in dictionary) {
    result = input;
  } else {
    var bestDistance = Infinity;
    var bestRelevance = Infinity;  // will be based on number given to words in dictionary object
    for (var word in dictionary) {
      var distance = levenshteinDistance(word, input);

      if (distance < bestDistance) {
        result = word;
        bestDistance = distance;
        bestRelevance = relevance;
      } else if (distance === bestDistance && relevance < bestRelevance) {
        result = word;
        bestDistance = distance;
        bestRelevance = relevance;
      }
    }
  }
  return result;
}

