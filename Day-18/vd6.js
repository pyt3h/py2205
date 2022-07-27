function calcRect(x1,y1,x2,y2){
    let w = x2-x1;
    let h = y2-y1;
    let p = 2*(h+w);
    let s = h*w;
    return [p,s];
}

let [cv,dt] = calcRect(5,5,10,15);
console.log('chu vi=', cv);
console.log('dient tich=', dt);