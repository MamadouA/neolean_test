import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  entriesBaseUrl: string = "http://127.0.0.1:8000/api/entries";
  usersBaseUrl: string = "http://127.0.0.1:8000/api/users";
  connectedUser: any;
  entries: any;
  
  constructor(private http: HttpClient, private router: Router) {}

  // --------- entries
  getEntries() {
    let id_user = sessionStorage.getItem("id");
    return this.http.get(this.entriesBaseUrl + "/" + id_user);
  }

  getEntryById(id_entry: any) {
    return this.http.get(this.entriesBaseUrl + "/getEntry/" + id_entry);
  }

  addEntry(dateSaisie: any, titre: any, description: any) {
    let id_user = sessionStorage.getItem("id");
    this.http.post(this.entriesBaseUrl, {dateSaisie, titre, description, id_user}).subscribe();
    alert("Ajout réussi!");
  }

  deleteEntry(entryId: number) {
    let url: string = this.entriesBaseUrl + "/" + entryId;
    alert("Suppression...");
    return this.http.get(url);
  }

  editEntry(idEntry: any, dateSaisie: any, titre: any, description: any) {
    if(idEntry == '' || dateSaisie == '' || titre == '' || description == '')
      alert("Tous les champs sont obligatoires!");
    else {
         this.http.post(this.entriesBaseUrl + "/update/" + idEntry, 
            {dateSaisie, titre, description}).subscribe();
          
          alert("Modifications effectuées!");
    }
  }

  // ----------- users
  authenticateUser(username: any, password: any) {
    let url: string = this.usersBaseUrl + "/" + "getUser" 
      + "?" + "username=" + username + "&password=" + password;

    this.http.get(url).subscribe(data => {
      this.connectedUser = data;
      if(this.connectedUser) {
        sessionStorage.setItem("id", this.connectedUser.id);
        this.router.navigate(['/journal/' + this.connectedUser.id])
      } 
    }); 
  }

  registerUser(username: any, password: any) {
    this.http.post(this.usersBaseUrl, {username, password}).subscribe();
    alert("Inscription réussie!");
  }
}
