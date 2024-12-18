import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { FormsModule } from '@angular/forms';


import { DbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  exports: [DbzComponent],
  declarations: [DbzComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
