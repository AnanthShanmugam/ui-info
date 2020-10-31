import { Component, OnInit } from '@angular/core';

import { Person } from '../../models/person';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent{
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Person(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

newHero() {
this.model = new Person(42, '', '');
}


}
