import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
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
  isLoading: boolean = false;

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
    this.displayService.getLoading().subscribe((loading: boolean) => {
      this.isLoading = loading;
    });
  }
  ngOnInit(): void {
    this.displayService.displayChefs();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
