function fibonacciGenerator (n) {
        var arr = [0,1];
        if(n === 1) {
            arr.pop();
            return arr;
        } 
        else {
            for (let i = 3; i <= n; i++) {
                arr.push(arr[i-3]+arr[i-2]);
                }
        }
        return arr;
        
    }