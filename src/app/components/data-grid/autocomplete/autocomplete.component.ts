import { DataService } from '../../../data.service';
import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { IFlight } from 'src/app/models/flight.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  @Input() public row!: IFlight;

  title = 'highlight-text';
  searchText = '';

  filteredCount = { count: 0 };
  options: string[] = [];
  option: any;
  local_data: any;
  hideOptions: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AutocompleteComponent>,
    public service: DataService,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.local_data = this.searchText;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getRegistrations().subscribe((d) => {
      this.options = d.split('\n');
    });
  }

  print(option: any) {
    this.searchText = option;
    this.hideOptions = true;
  }

  doAction() {
    this.dialogRef.close({ data: this.searchText });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  cancelRegistration() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
