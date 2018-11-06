function solution(X, Y, D) {
    if(Y-X <= 0) {
        return 0;
    } else {
        return Math.ceil((Y-X)/D);
    }
}