
import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrl: './entries-list.component.css'
})
export class EntriesListComponent {
  url: string = "http://127.0.0.1:8000/api/entries";
  entries: any;

  constructor(private dataService: DataService) {
    this.dataService.getEntries().subscribe(data => this.entries = data);
    console.log(this.entries);
  }

  deleteEntry(entryId: number) {
    this.dataService.deleteEntry(entryId).subscribe();
  }
}
