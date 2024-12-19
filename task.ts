interface Task{
    id:number;
    name:string;
    isCompleted:boolean;
}

class ToDoList{
    private t:Task[]=[];
    AddTask(t:Task):void{
        this.t.push(t);
    }
    CompleteTask(id:number):void{
        const t1=this.t.find(t=>t.id==id);
        if(t1)t1.isCompleted=true;
    }
    DeleteTask(id:number):void{
        this.t.filter(t=>t.id!=id);
    }
    ConsoleTask():{comple:Task[],pending:Task[]}{
        return{
        comple:this.t.filter(t=>t.isCompleted==true),
        pending:this.t.filter(t=>t.isCompleted==false)
        };
    }
}

const todo=new ToDoList();
todo.AddTask({id:1,name:"Hoc js",isCompleted:true});
todo.AddTask({id:2,name:"Hoc ts",isCompleted:false});
todo.AddTask({id:3,name:"Công việc nhà",isCompleted:false});
todo.CompleteTask(3);
console.log("Công viên đã hoàn thành:",todo.ConsoleTask().comple);
console.log("Công viên chưa hoàn thành:",todo.ConsoleTask().pending);