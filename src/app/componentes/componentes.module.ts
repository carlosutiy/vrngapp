import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtopComponent } from './navtop/navtop.component';
import { NavsideComponent } from './navside/navside.component';

@NgModule({
  exports: [
    NavtopComponent,
    NavsideComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [NavtopComponent, NavsideComponent]
})
export class ComponentesModule { }
