import { AutocompleteComponent } from './../autocomplete/autocomplete.component';

import { DataService } from './../../../data.service';
import { Component, Input, Inject } from '@angular/core';

import { IFlight } from 'src/app/models/flight.interface';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'data-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {
  @Input() public row!: IFlight;

  constructor(public dialog: MatDialog) {}

  openDialog(obj: any) {
    const dialogRef = this.dialog.open(AutocompleteComponent, {
      panelClass: 'my-dialog',
      backdropClass: 'my-backdrop',
      data: {
        obj,
        fNumber: this.row.flightNumber,
        date: this.row.scheduledDate,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.updateRegistration(result.data);
      console.log(result.data);
    });
  }
  updateRegistration(registration: any) {
    this.row.registration = registration;
  }
}
