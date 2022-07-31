let student_list =[
    {
        name: 'Nguyen Van A',
        birth_year: 2000
    },
    {
        name: 'Nguyen Van B',
        birth_year: 1999
    }
];
let keyword = 'A';
let n = student_list.length;
for(let i = 0; i < n; i++){
    let st = student_list[i];
    let name = st.name;
    if(name.includes(keyword)){
        console.log(name);
    }
}