import Employee from "./employee";
import UIProgrammerSkills from "./ui-programmer"

class Programmer{
    constructor(name){
        this.name = name;
    }
};
Object.assign(Programmer.prototype, Employee(), UIProgrammerSkills())

console.log("Programmer Prototype", Programmer.prototype);
export default Programmer;
