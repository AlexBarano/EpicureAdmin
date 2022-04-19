import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {
  chefsColumnsToDisplay: string[] = ['name', 'isChefOfTheWeek'];
  restaurantsColumnsToDisplay: string[] = ['name', 'chef', 'edit'];
  dishesColumnsToDisplay: string[] = ['name', 'restaurant'];
  exampleArr: any[] = [
    { name: 'alex', chef: 'baranov', edit: '123' },
    { name: 'alex', chef: 'baranov', edit: '123' },
    { name: 'alex', chef: 'baranov', edit: '123' },
    { name: 'ania', chef: 'lipkin', edit: '123' },
    { name: 'ania', chef: 'lipkin', edit: '123' },
    { name: 'ania', chef: 'lipkin', edit: '123' },
    { name: 'ania', chef: 'lipkin', edit: '123' },
  ];
  dataSource = new MatTableDataSource<{ name: string; surname: string }>(
    this.exampleArr
  );

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
