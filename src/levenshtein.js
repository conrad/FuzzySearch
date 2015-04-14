// var levenshteinDistance = function(word1, word2){
//   var result = 0;
//   var grid = [];

//   for (var i = 0; i < word1.length; i++) {
//     grid.push([i]);
//   }

//   grid[0] = word2.split('').map(function(value, index){ return index; });

//   for (var i = 1; i < word1.length; i++) {
//     for (var j = 1; j < word2.length; j++) {

//       if (word1[i] === word2[j]) {
//         grid[i][j] = grid[i - 1][j - 1];
//       } else {
//         var above = grid[i - 1][j];
//         var left = grid[i][j - 1];
//         var aboveLeft = grid[i - 1][j - 1];
//       }

//     }
//   }
//   return result;   // # of changes b/t words
// };

// Compute the edit distance between the two given strings
function levenshteinDistance(a, b) {
  if(a.length === 0) return b.length; 
  if(b.length === 0) return a.length; 
 
  var matrix = [];
 
  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
 
  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
 
  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }
 
  return matrix[b.length][a.length];
};


// levenshteinDistance('hi', 'hey');
