import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayService } from './services/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {
  columnsToDisplay: string[] = [];
  typeOfContentToDisplay: string = '';
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private displayService: DisplayService) {
    this.displayService.getDisplay().subscribe((data: any) => {
      this.dataSource.data = data;
    });
    this.displayService.getTypeOfDisplay().subscribe((data: any) => {
      this.typeOfContentToDisplay = data;
    });
    this.displayService.getColumnsToDisplay().subscribe((data: string[]) => {
      this.columnsToDisplay = data;
    });
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
