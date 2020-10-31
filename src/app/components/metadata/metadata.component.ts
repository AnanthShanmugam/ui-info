import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../services/business.service';

import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {


  metaData:Array<any>;
  faCheck = faCheck;
  faTimes = faTimes;

  constructor(
    private businessService: BusinessService
  ) { 
    this.metaData = [];
  }

  ngOnInit(): void {
    
    const metaDataObservabele = this.businessService.getMetadata();

    metaDataObservabele.subscribe(data=>{
      console.log(data);
      this.metaData = data["field"];
    },
    err=>{
      console.log("Error retreiving metadata");
    })

  }

}
