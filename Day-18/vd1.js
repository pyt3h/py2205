// Cho tuổi & giới tính 1 người
// Kiểm tra xem người đó có trong tuổi LĐ ko
let age = 50;
let gender = 'M';
let max_age=(gender=='F')? 55 : 60;
/*
if(gender=='F'){
    max_age = 55;
}else{
    max_age = 60;
}*/

if(age>=16 && age <=max_age){
    console.log('yes');    
}else{
    console.log('no');
}