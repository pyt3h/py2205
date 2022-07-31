//Cho 2 xau, tim vi tri dau tien
//2 xau khac nhau
let st1 = 'Ha Noi';
let st2 = 'Ha Nam';
let n1 = st1.length;
let n2 = st2.length;
let n = n1 < n2? n1:n2;
for(let i=0;i < n;i++){
    let c1 = st1[i];
    let c2 = st2[i];
    if(c1 != c2) {
        console.log(i);
        break;
    }
}
