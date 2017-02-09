import {Routes} from '@angular/router';
import {View1Component} from './view/view1.component';
import {View2Component} from './view/view2.component';
import {MembersComponent} from './members/members.component';
import {PersonComponent} from './members/person/person.component';


export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'view1', pathMatch: 'full'},
  {path: 'view1', component: View1Component},
  {path: 'view2', component: View2Component},
  {path: 'members', component: MembersComponent},
  {path: 'person/:id', component: PersonComponent}
];
