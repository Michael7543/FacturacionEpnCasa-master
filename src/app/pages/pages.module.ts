import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TipoConceptoComponent } from './TipoConcepto/TipoConcepto.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TipoConceptoComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    TipoConceptoComponent
  ]
})
export class PagesModule { }
