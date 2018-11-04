function solution(X, A) {
    var result;
    var missing = [];
    if(A.indexOf(X) === -1) {
        result = -1;
    } else {
        var min = A.indexOf(X);
        if(min < X-1) {
            min = X;
        }
        for(var i=1; i < min; i++) {
            if(A.indexOf(i) === -1 || A.indexOf(i) > min) {
                missing.push(i);
            }
        }
        if(missing.length>0) {
            for(var i=min; i <= A.length; i++) {
                if(missing.indexOf(A[i]) !== -1) {
                    var index = missing.indexOf(A[i]);
                   missing.splice(index,1);
                }
                if(missing.length === 0) {
                    result = i;
                    break;
                }
            }
            if(missing.length>0) {
                result = -1;
            }
        } else {
            result = min;
        }
    }
    return result;
}