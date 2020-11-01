import { Component, OnInit } from '@angular/core';

import { Person } from '../../models/person';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent{



personData = new Person('1', 'HARLEY,WILLIAM', 'Person', 'WILLIAM','HARLEY','1886-09-07T00:00:00+01:00','1234567','III','WILLIAM WINTON HARLEY');

submitted = false;

onSubmit() { this.submitted = true; }

newPerson() {
this.personData = new Person(null,null,null,null,null,null,null,null,null);
}


resetPerson(){
  console.log("Resetting Data");
}


}
