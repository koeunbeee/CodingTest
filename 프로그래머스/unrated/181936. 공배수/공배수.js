function solution(number, n, m) {
    var answer = 0;
    
//    number%n === 0?
//        number%m === 0?
//            answer = 1 : 0
//                          : 0
//
//    if(number%n === 0){
//        if(number%m === 0){
//            answer = 1;
//        }
//    }

    if(number%n === 0 && number%m === 0){
        answer = 1;    
    }  
    return answer;
}