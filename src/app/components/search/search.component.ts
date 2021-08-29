import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public keyword: string = '';
    public historyList: string[] = [];

    constructor(private storage: StorageService) {}

    ngOnInit(): void {
        let searchList = this.storage.get('searchList');
        if (searchList) {
            this.historyList = searchList;
        }
    }

    doSearch(): void {
        if (this.historyList.indexOf(this.keyword) == -1 && this.keyword !== '') {
            this.historyList.push(this.keyword);
            this.storage.set('searchList', this.historyList);
        }
        this.keyword = '';
        console.log(this.keyword);
    }

    removeHistory(i: number): void {
        alert(`Removed ${this.historyList[i]}`);
        this.historyList.splice(i, 1);
        this.storage.set('searchList', this.historyList);
    }

    clearHistory(): void {
        alert('History cleared');
        this.historyList = [];
        this.storage.set('searchList', this.historyList);
    }

}
