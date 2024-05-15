import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrl: './add-entry.component.css'
})
export class AddEntryComponent {
  constructor(private dataService: DataService) {}

  addEntryForm = new FormGroup({
    dateSaisie: new FormControl(''),
    titre: new FormControl(''),
    description: new FormControl('')
  });

  addEntry() {
    this.dataService.addEntry(
      this.addEntryForm.value.dateSaisie,
      this.addEntryForm.value.titre,
      this.addEntryForm.value.description
    );
  }
}
