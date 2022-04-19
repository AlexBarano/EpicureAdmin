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
  chefsColumnsToDisplay: string[] = ['name', 'isChefOfTheWeek', 'edit'];
  restaurantsColumnsToDisplay: string[] = ['name', 'chef', 'edit'];
  dishesColumnsToDisplay: string[] = ['name', 'restaurant', 'edit'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private displayService: DisplayService) {
    this.displayService.getDisplay().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
