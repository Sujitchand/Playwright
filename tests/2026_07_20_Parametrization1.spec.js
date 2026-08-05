import{test,expect} from "@playwright/test";

import testdata from "../Screenshots/testdata.json";

for(let i=0;i<testdata.length;i++){
test(`Print user data${i+1}`,async()=>{
    console.log("username",testdata[i].username);
    console.log("password",testdata[i].password);
});
}

//by using for of 

for(const userdata of testdata){
    test(`test name ${userdata.username}`,async()=>{
        console.log("username",userdata.username);
        console.log("password",userdata.password);
    })
}

