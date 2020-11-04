function myfun() {
    Name = document.getElementById("name").value;
    Fname = document.getElementById("fname").value;
    Email = document.getElementById("email").value;
    Math = document.getElementById("math").value;
    Science = document.getElementById("Science").value;
    Physics = document.getElementById("Physics").value;
    English = document.getElementById("English").value;
    Chemestry = document.getElementById("Chemestry").value;
    let TotalMarks = parseFloat(Math) + parseFloat(Science) + parseFloat(English) + parseFloat(Physics) + parseFloat(Chemestry)  ;
    let Perc = (TotalMarks/500)*100 ;
    let Grades = "";
    if(Perc<=100 && Perc>=100){
        Grades = 'A'
}
     else if(Perc<=79 && Perc>=60){

    Grades = 'B'
}
else if(Perc<=59 && Perc>=40){

    Grades = 'C'
}
else{

    Grades = 'FALE'
}

    let final = ['Name', 'Fname', 'Email', 'Math', 'Science', 'Physics', 'English', 'Chemestry', 'TotalMarks','Percentage' ,'Grade']
    let value = [`${Name}`, `${Fname}`, `${Email}`, `${Math}`, `${Science}`, `${Physics}`, `${English}`, `${Chemestry}`,`${TotalMarks}` , `${Perc}`,`${Grades}`]
    let table = document.getElementById("table");
table.style.color = 'green';
table.style.fontSize = '20px';
table.style.textAlign = 'center'
for (i = 0; i < 1; i++) {
        tr = document.createElement("tr");
        final.forEach(function (main) {
            th = document.createElement("th");
            th.innerText = main
            
            tr.appendChild(th)

        })

        table.appendChild(tr)


    }
    for (i = 0; i < 1; i++) {
        tr = document.createElement("tr");
        value.forEach(function (data) {
            td = document.createElement("td");
            td.innerText = data
            tr.appendChild(td)

        })
        table.appendChild(tr)
    }
}
