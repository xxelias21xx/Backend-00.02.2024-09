const getStudentNames = (students) =>
    students.map(student => student.name);
  
  console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]));

  