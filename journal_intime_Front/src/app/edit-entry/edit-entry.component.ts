import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrl: './edit-entry.component.css'
})
export class EditEntryComponent {
    idEntry: any;
    entry: any;

    constructor(private dataService: DataService, private route: ActivatedRoute) {
      // recuperation de l'id depuis l'url
      this.route.paramMap.subscribe(params => {
        this.idEntry = params.get("id");
      });

      dataService.getEntryById(this.idEntry).subscribe(data => this.entry = data);
    }

  editEntryForm = new FormGroup({
    dateSaisie: new FormControl(),
    titre: new FormControl(),
    description: new FormControl()
  });

  editEntry() {
    this.dataService.editEntry(
      this.idEntry,
      this.editEntryForm.value.dateSaisie ?? '',
      this.editEntryForm.value.titre ?? '',
      this.editEntryForm.value.description ?? ''
    );
  }
}
