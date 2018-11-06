function solution(A) {
    var array = [];
    A.map((a) => {
        if(array.includes(a)) {
            var index = array.indexOf(a);
            array.splice(index,1);
        } else {
            array.push(a);
        }
    })
    return array[0];
}