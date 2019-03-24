module.exports = function solveSudoku(matrix) {
    const matrixDeepCopy = JSON.parse(JSON.stringify(matrix));
    for(let row=0;row<9;row++)
    for(let col=0;col<9;col++){
        if(matrixDeepCopy[row][col]===0){
            let solutionScope = findSolution(row,col,matrixDeepCopy);
            if(solutionScope.length==0){
              return false;
            }
            for(let solution of solutionScope){
                matrixDeepCopy[row][col] = solution;
                var result = solveSudoku(matrixDeepCopy);
                if(result!=false){
                  return solveSudoku(result);
                }
            }
            return false;
        }
    }
    return  matrixDeepCopy;
}

function findSolution(row,col,matrix){
    const scope = [];
    label: for(let i=1;i<10;i++){
        for(let j=0;j<9;j++){
            if(matrix[row][j]==i || matrix[j][col]==i || matrix[Math.floor(row/3)*3+j%3][Math.floor(col/3)*3+Math.floor(j/3)]==i){
                continue label;
            }
        }
        scope.push(i);
    }
  return scope;
}