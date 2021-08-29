import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

    constructor(public storage: StorageService) { }

    ngOnInit(): void {
    }

    public keyword: string = '';
    public todo: any[] = [];

    doAdd(e: any) {
        if(e.keyCode === 13 && this.keyword !== '') {
            if (this.todoListHasKeyWord(this.todo, this.keyword) === false) {
                this.todo.push({
                    title: this.keyword,
                    status: false
                })
                this.keyword = '';
                this.storage.set('todolist', this.todo);
            } else {
                alert("Item already exists")
            }
        } 
    }

    deleteData(i: number) {
        alert(`Removed ${this.todo[i].title}`)
        this.todo.splice(i, 1);
        this.storage.set('todolist', this.todo);
    }

    todoListHasKeyWord(todolist: any[], keyword: any) {
        let result: boolean = false;
        todolist.forEach(value => {
            if(value.title === keyword) {
                result = true;
            }
        });
        return result;
    }

    checkboxChange() {
        this.storage.set('todolist', this.todo);
    }

}
