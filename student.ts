interface student{
    id:number;
    name:string;
    age:number;
    score:number;
}

class StudentManager{
    private Student: student[]=[];
    addStudent(Student:student):void{
        this.Student.push(Student);
    }
    getStudent():student[]{
        return this.Student;
    }
    findStudent(id:number):student|undefined{
        return this.Student.find(Student=>Student.id==id);
    }
}

const manager=new StudentManager();
manager.addStudent({id:1,name:"Nguyen Van A",age:20,score:9});
manager.addStudent({id:2,name:"Nguyen Van B",age:20,score:8});

console.log("Danh sách sinh viên:",manager.getStudent());
console.log("Sinh vien có id bằng 1:",manager.findStudent(1));
