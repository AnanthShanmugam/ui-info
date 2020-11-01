import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})


export class FormDataComponent implements OnInit{

    @Input() persons:Array<Person>;
    @Output() personsUpdated: EventEmitter<any> = new EventEmitter();

    personData:Person;

    constructor(){
      this.persons = [];
    }

    ngOnInit(){
      
      if(this.persons){
        let selectedPerson = this.persons.filter(record =>{
          return record.selected;
        })
        this.personData = Object.assign({},selectedPerson[0]);
        this.personData.$original = Object.assign({},selectedPerson[0]);
      }
    
    }

   
submitted = false;

onSubmit(id:number) { 
 
  id?this.updatePerson(id):this.createNewPerson();
  this.submitted = true; 
  this.personsUpdated.emit(this.persons);
  
}

newPerson() {
  this.personData = new Person(null,null,null,null,null,null,null,null,null);
}

updatePerson(id){
  this.persons.forEach((row,index)=>{
    if(row.rowidObject == id){
      this.persons[index]=this.personData;
    }
  })
 
  
}

createNewPerson(){
  let max = 0;
  this.persons.forEach(person => {
    if (person.rowidObject > max) {
    max = person.rowidObject;
    }
  });

  this.personData.rowidObject = max+1;
  this.persons.push(this.personData);


}


resetPerson(){
  this.personData = Object.assign({},this.personData.$original);
  this.personData.$original = Object.assign({},this.personData);
}


}
