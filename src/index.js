module.exports = function solveSudoku(matrix) {
    for(let row=0;row<matrix.length;row++)
    for(let col=0;col<matrix.length;col++){
        if(matrix[row][col]==0){
            let solutionScope = findSolution(row,col,matrix);
            for(let solution of solutionScope){
                matrix[row][col] = solution;
                solveSudoku(matrix);
            }
        }
    }
    return matrix;
}

function findSolution(row,col,matrix){
  let scope = [];
  label: for(let i=1;i<10;i++){
      for(let j=0;j<matrix.length;j++){
          if(matrix[row][j]==i || matrix[j][col]==i || matrix[Math.floor(row/3)*3+j%3][Math.floor(col/3)*3+Math.floor(j/3)]==i){
              continue label;
          }
      }
      scope.push(i);
  }
return scope;
}