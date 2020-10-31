import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MetadataComponent } from './components/metadata/metadata.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'metadata',
    component: MetadataComponent
  },
  { 
    path: '**', 
    component: NotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
