import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MetadataComponent } from './components/metadata/metadata.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormDataComponent } from './components/form-data/form-data.component';

import { BusinessService } from './services/business.service';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MetadataComponent,
    HomeComponent,
    NotfoundComponent,
    FormDataComponent,
    PersonTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule {}
