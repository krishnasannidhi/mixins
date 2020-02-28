import './style.scss'

import Programmer from "./programmer";

function component() {
    const element = document.createElement('div');

    element.innerHTML = //'Welcome to Mixins Short Tutorial'
    `Employee Salary  is : ${new Programmer().getBaseSalary()}
    Employee UI Skills: ${new Programmer('Krishna').getSkills()} `
                    
    element.classList.add('class1');

    return element;
}

document.body.appendChild(component());
