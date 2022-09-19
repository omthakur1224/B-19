# take one object and put only ping count in that so that obj will contain ping count and when you are putting some char first time in obj simaltanously inc the count so that you will know is the count ==4 which means if your count in obj less than 4 which means in your obj no ping is there. why 4 because length of ping is 4. After this itrerate over the obj and check for the min time repition of char. and you will get ans


    let fs = require("fs");
    let data = fs.readFileSync(0, 'utf-8');
    data = data.split('\n');
    let tc=+data[0];
    let line=1;

    for(let i=0;i<tc;i++){
        let n=+data[line++];
        let str=data[line++];
        ping(str,n)
    }
    function ping(str,n){
        let obj={};
        let count=0;
        
    for(let i=0;i<n;i++){
        if(str[i]=='p'||str[i]=='i'||str[i]=='n'||str[i]=='g'){
            if(obj[str[i]]===undefined){
                   obj[str[i]]=1;
                    count++;
            }
           else obj[str[i]]++;
        }
    }
    
    let min=Infinity;
    for(let key in obj){
        if(obj[key]<min){
            min=obj[key];
        }
    }
    if(count==4){
        console.log(min)
    }
    else console.log(0)
}
 