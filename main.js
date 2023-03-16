 document.write("4. B. Print the  record for the employee whose name is John index position using findIndex method");
   document.write("<br>");
   document.write("<br>");

   const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
   ];

   const employee = employees.findIndex(worker => worker.name.includes("John"));
   document.write("Show in console.log ===>");
   console.log(employee);