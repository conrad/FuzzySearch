var levenshteinDistance = function(word1, word2){
  var result = 0;
  var grid = [];

  for (var i = 0; i < word1.length; i++) {
    grid.push([i]);
  }
  grid[0] = word2.split('').map(function(value, index){ return index; });

  for (var i = 1; i < word1.length; i++) {
    for (var j = 1; j < word2.length; j++) {

      if (word1[i] === word2[j]) {
        grid[i][j] = grid[i - 1][j - 1];
      } else {
        var above = grid[i - 1][j];
        var left = grid[i][j - 1];
        var aboveLeft = grid[i - 1][j - 1];
      }


      // if (word1[i] === word2[j]) {
        // if they're the same, noop
        // temp += word1[i];
        // result += Math.abs(j-i);
      // } else if () {
      // }



    }
  }
  return result;   // number of changes b/t words
}



  // add
  // subtract
  // replace

  // for ()
  // console.log(rows);



// levenshteinDistance('hi', 'hey');
