import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit {

  @Input() persons:Array<Person>;
  @Output() dataUpdated:any;
  
  constructor() { 
    this.persons=[];
    this.dataUpdated = new EventEmitter<any>();
  }

  ngOnInit(): void {
    
    
  }


  selectPerson(person){
    this.persons.forEach((row,index)=>{
      this.persons[index].selected=false;
      if(row.rowidObject == person.rowidObject){
        this.persons[index].selected = true;
      }
    })
  //  this.dataUpdated.emit(this.persons);

  }
}
