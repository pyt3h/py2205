student_list = [ 
    {
        "name": "Nguyen Van A",
        "birth_year": 2000,
    },
    {
        "name": "Nguyen Van B",
        "birth_year": 1999,
    },
]
keyword = 'Nguyen'
n = len(student_list)
for i in range(n):
    st = student_list[i]
    name = st['name']
    if keyword in name:
        print(name)
    
