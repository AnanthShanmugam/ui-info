import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  persons:Array<Person>;
  selectedPerson:Person;

  constructor() { }

  ngOnInit(): void {
    
    this.persons = [
      {
        "rowidObject": 1,
        "label": "HARLEY,WILLIAM",
        "partyType": "Person",
        "firstName": "WILLIAM",
        "lastName": "HARLEY",
        "birthdate": "1886-09-07T00:00:00+01:00",
        "taxId": "1234567",
        "generationSuffixCd": "III",
        "displayName": "WILLIAM WINTON HARLEY",
        "selected":true
      }
    ];

 
  
  }


  updatePersonsList(data:any){
    console.log("Data in home ",data);
  }
 

}

  
