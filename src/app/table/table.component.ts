import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatTableModule, MatSortModule, MatTableDataSource} from '@angular/material';
import { Color } from '../color';
import { COLORSService } from '../colors.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {     
  colors: Color[];
  getColors(): void {
	  this.colors = this.COLORSService.getColors();
	}
  constructor(private COLORSService: COLORSService) { 
	}
  ngOnInit() {
    this.getColors();
  }
}