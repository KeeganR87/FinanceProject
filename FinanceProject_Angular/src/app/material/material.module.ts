import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatTableModule, MatGridListModule } from '@angular/material';
import { MatTabsModule, MatMenuModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { MatSortModule, MatCheckboxModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
