var run = function () {
    var inputEmployeeFirstName = document.getElementById("inputEmployeeFirstName");
    var inputEmployeeLastName = document.getElementById("inputEmployeeLastName");
    var inputEmployeeSalary = document.getElementById("inputEmployeeSalary");
    var inputEmployeePosition = document.getElementById("inputEmployeePosition");

    var emplyeelistItem = document.createElement('li');

    var maxEmploeesInput = document.getElementById('maxEmploee');
    var allLi = document.querySelector('.employeeList').getElementsByTagName('li');
    var MAX_SALARY_PER_EMPLOYEE = 2000;

    //max count validation
    if (parseInt(allLi.length) > maxEmploeesInput.value) {
        console.log("exeded");
        document.querySelector('.alert-maxCount').style.display = 'block';
        return;
    } else {
        document.querySelector('.alert-maxCount').style.display = 'none';
    }


    //max salry validation
    var salaryFromInput = parseInt(inputEmployeeSalary.value) || 0;


    if (salaryFromInput > MAX_SALARY_PER_EMPLOYEE) {

        document.querySelector('.alert-maxSalaryAmount').style.display = 'block';
        return;
    } else {
        document.querySelector('.alert-maxSalaryAmount').style.display = 'none';
    }


    //dublicates
    for (var i = 0; i < allLi.length; i++) {
        console.log(allLi[i]);
        if (allLi[i].getElementsByTagName('span')[0].textContent == inputEmployeeFirstName.value) {

            if (allLi[i].getElementsByTagName('span')[1].textContent == inputEmployeeLastName.value) {
                document.querySelector('.alert-dublicate').style.display = 'block';

                return;
            }

        } else {
            document.querySelector('.alert-dublicate').style.display = 'none';

        }


    }




    emplyeelistItem
        .appendChild(document.createElement('span').appendChild(document.createTextNode(inputEmployeeFirstName.value)).parentNode).parentNode
        .appendChild(document.createElement('span').appendChild(document.createTextNode(inputEmployeeLastName.value)).parentNode).parentNode
        .appendChild(document.createElement('span').appendChild(document.createTextNode(inputEmployeeSalary.value)).parentNode).parentNode
        .appendChild(document.createElement('span').appendChild(document.createTextNode(inputEmployeePosition.value)).parentNode).parentNode;

    emplyeelistItem.childNodes[0].className = "employeeFirstName";
    emplyeelistItem.childNodes[1].className = "employeeLastName";
    emplyeelistItem.childNodes[2].className = "employeeSalary";
    emplyeelistItem.childNodes[3].className = "employeePosition";


    console.log(emplyeelistItem);


//add to list
    var newLi = document.getElementsByClassName('employeeList')[0].appendChild(emplyeelistItem);
    console.log(newLi);
    //  debugger;


    console.log(allLi);

    //lenght
    document.querySelector('.no-empl').textContent = allLi.length.toString();


    //salary
    var avgSalary = 0;
    for (var i = 0; i < allLi.length; i++) {

        avgSalary += parseInt(allLi[i].getElementsByTagName('span')[2].textContent) || 0;
    }

    document.querySelector('.avg-salary').textContent = (avgSalary / (allLi.length )).toFixed(1);

    //  debugger;


};






