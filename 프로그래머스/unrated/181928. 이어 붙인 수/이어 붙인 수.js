function solution(num_list) {
    var answer = 0;
    let odd = "";
    let even = "";
    
    for (let i=0; i < num_list.length; i++){
        if(num_list[i]%2 === 1){
            odd += num_list[i].toString()
        } else if (num_list[i]%2 === 0){
            even += num_list[i].toString()
        }
        answer = parseInt(odd) + parseInt(even)
    }
    return answer;
}