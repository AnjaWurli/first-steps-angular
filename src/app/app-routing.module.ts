import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialComponent } from './social/social.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'fruits', component: SocialComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
