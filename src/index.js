module.exports = 
function solveSudoku(matrix) {



  var emptyPositions = findArrayOfEmpty(matrix);

  
function findArrayOfEmpty(matrix) {
var emptyPositions = [];
for(var i = 0; i < matrix.length; i++) {
  for(var j = 0; j < matrix[i].length; j++) {
    
    if(matrix[i][j] === 0) {
      emptyPositions.push([i, j]);
    }
  }
}
return emptyPositions;
};


function checkRow(matrix, row, value) {
  for(var i = 0; i < matrix[row].length; i++) {
    if(matrix[row][i] === value) {
      return false;
    }
  }
  return true;
};

function checkColumn(matrix, column, value) {
  // Iterate through each value in the column
  for(var i = 0; i < matrix.length; i++) {
    // If a match is found, return false
    if(matrix[i][column] === value) {
      return false;
    }
  }
  // If no match was found, return true
  return true;
};

function checkBoxOfThree(matrix, column, row, value) {
  // Save the upper left corner
  var columnCorner = 0,
      rowCorner = 0,
      squareSize = 3;

  // Find the left-most column
  while(column >= columnCorner + squareSize) {
    columnCorner += squareSize;
  }

  // Find the upper-most row
  while(row >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }

  // Iterate through each row
  for(var i = rowCorner; i < rowCorner + squareSize; i++) {
    // Iterate through each column
    for(var j = columnCorner; j < columnCorner + squareSize; j++) {
      // Return false is a match is found
      if(matrix[i][j] === value) {        
        return false;
      }
    }
  }
  // If no match was found, return true
  return true;
};

function checkValue(matrix, column, row, value) {
  if(checkRow(matrix, row, value) &&
    checkColumn(matrix, column, value) &&
    checkBoxOfThree(matrix, column, row, value)) {
    return true;
  } else {
    return false;
  }
};


function solution(matrix, emptyPositions) {
  // Variables to track our position in the solver
  var limit = 9;
  let i, row, column, value, found;
  for(i = 0; i < emptyPositions.length;) {
    row = emptyPositions[i][0];
    column = emptyPositions[i][1];
    // Try the next value
    value = matrix[row][column] + 1;
    // Was a valid number found?
    found = false;
    // Keep trying new values until either the limit
    // was reached or a valid value was found
    while(!found && value <= limit) {
      // If a valid value is found, mark found true,
      // set the position to the value, and move to the
      // next position
      if(checkValue(matrix, column, row, value)) {
        found = true;
        matrix[row][column] = value;
        i++;
      } 
      // Otherwise, try the next value
      else {
        value++;
      }
    }
    // If no valid value was found and the limit was
    // reached, move back to the previous position
    if(!found) {
      matrix[row][column] = 0;
      i--;
    }
  }

 
 

  // return the solution
  return matrix;
};

return solution(matrix, emptyPositions);
}
  /*for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix.length; j++){
      let missing=[];
      if(matrix[i][j]==0){
        
        for(let k=1; k<10;k++){
          let colArray=[];
         for (let z=i+1; z<matrix.length;z++ ){
           colArray.push(matrix[z][j])
         };
         if(matrix[i].includes(k)==false && colArray.includes(k)==false) {
           missing.push(k);
         }

        }
        matrix[i][j]=missing[0]
        //console.log("missing is: " + missing[0]);
        
        //console.log("matrix i  j "+matrix[i][j])
      }
      
    }
    //console.log(matrix[i])
  }
  return matrix;
}
console.log(solveSudoku([
  [5, 3, 4, 6, 7, 8, 9, 0, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]))*/