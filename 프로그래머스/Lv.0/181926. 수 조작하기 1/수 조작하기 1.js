function solution(n, control) {
    var answer = 0;
    let arr = control.split("");
    for(let i=0; i < arr.length; i++){
        switch(arr[i]){
            case "w":
                n += 1
            break;
            case "s":
                n -= 1
            break;
            case "d":
                n += 10
            break;
            case "a":
                n -= 10
            break;
        }
    }    
    answer = n;
    return answer;
}