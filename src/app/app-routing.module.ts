import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path:'', redirectTo: '/search', pathMatch: 'full'},
  { path: 'search', component: SearchComponent },
  { path: 'asset/:id', component:MediaComponent }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
