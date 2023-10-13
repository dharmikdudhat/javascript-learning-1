//var rotate = function (matrix) {
    var rotate = function (arr) {
        //let k = arr.length - 1;
        let x = 0;
        let y = arr.length - 1;
    
       // for (let i = 0; i < arr.length; i++) {
        while (x < y) {
    
           // for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < y - x; i++) {
    
                let temp = arr[x][x + i];
                arr[x][x + i] = arr[y - i][x];
                arr[y - i][x] = arr[y][y - i];
                arr[y][y - i] = arr[x + i][y];
                arr[x + i][y] = temp;
    
            }
            x++;
        
            
            y--;
        }
        //console.log(matrix);
        console.log(arr);
        }
        
    
    
    
    
    const arr =
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
            // [1, 2, 3, 20],
            // [4, 5, 6, 21],
            // [7, 8, 9, 22],
            // [10, 11, 12, 23]
        ];
    
    console.log(rotate(arr));