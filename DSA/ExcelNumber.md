# Given a number, convert it to excel title

# 1 -> A

# 2 -> B

# .....

# AA -> 27


    function getTitle(n){
        let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let m;
        let res = [];
        while (n > 0) {
                m = (n-1) % 26;
                n = (n-1-m) / 26;
                res.unshift(alp[m]);
             }
        console.log(res.join(""));
    }