import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule]

@NgModule({
  exports: modules
})
export class MaterialModule { }
