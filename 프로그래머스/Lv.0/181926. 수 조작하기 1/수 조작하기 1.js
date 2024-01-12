function solution(n, control) {
    var answer = 0;
    let arr = control.split("");
    console.log(arr)
    for(let i=0; i < arr.length; i++){
        if(arr[i] = "w"){
            n += 1
            console.log(arr[i])
        } else if (arr[i] = "s"){
            n -= 1
        } else if (arr[i] = "d"){
            n += 10
        } else if(arr[i] = "a"){
            n -= 10
        }
        console.log(n)

    }    
    answer = n;
    console.log(n)
    return answer;
}