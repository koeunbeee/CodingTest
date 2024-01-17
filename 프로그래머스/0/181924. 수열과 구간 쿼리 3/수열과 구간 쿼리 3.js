function solution(arr, queries) {
    var answer = arr;
    let newArray = [].concat(...queries);
    for (i=0;i<newArray.length;i=i+2){
        let a = newArray[i];
        let b = newArray[i+1];
        let c = arr[newArray[i]];
        arr[a] = arr[b];
        arr[b] = c;
    }
    return answer;
    
}