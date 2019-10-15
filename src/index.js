module.exports = 
function solveSudoku(matrix) {
  // your solution
  for (let i=0; i<matrix.length; i++){
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
/*console.log(solveSudoku([
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