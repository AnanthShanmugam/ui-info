import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit {

  @Input() persons:Array<Person>;
  
  constructor() { 
    this.persons=[];
  }

  ngOnInit(): void {
    
    
  }


  selectPerson(person){
    alert(person.rowidObject);
    this.persons.forEach((row,index)=>{
      this.persons[index].selected=false;
      if(row.rowidObject == person.rowidObject){
        this.persons[index].selected = true;
      }
    })

  }
}
