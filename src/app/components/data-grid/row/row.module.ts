import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RowComponent } from 'src/app/components/data-grid/row/row.component';

@NgModule({
  declarations: [RowComponent],
  exports: [RowComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class RowModule {}
