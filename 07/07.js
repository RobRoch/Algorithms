function solution(N, A) {
    var result = new Array(N).fill(0);
    var max = 0;
    A.map((a) => {
        if(a>N) {
            result.fill(max);
        } else {
            result[a-1]++;
            if(result[a-1] > max) {
                max = result[a-1];
            }
        }
    });
    return result;
}