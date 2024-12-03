// Write your solution in this file!
//  Employee object
const employee = {
    name: "Eddie Kobia",
    streetAddress: "125 Main St"
};

// update
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]: value 
    };
}

// Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee; 
}

// Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee;  
}

// Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
}


console.log("Original employee:", employee);
// update
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", " Senior Manager");
console.log("Updated (non-destructive):", updatedEmployee);
console.log("Original after non-destructive update:", employee);

// Destructive update
destructivelyUpdateEmployeeWithKeyAndValue(employee, "department", "IT Officer");
console.log("Updated (destructive):", employee);

// Non-destructive delete
const newEmployee = deleteFromEmployeeByKey(employee, "department");
console.log("Deleted (non-destructive):", newEmployee);
console.log("Original after non-destructive delete:", employee);

// Destructive delete
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Deleted (destructive):", employee);

