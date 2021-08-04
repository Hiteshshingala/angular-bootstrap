import { Component, OnInit } from '@angular/core';
import { IGender, ITilesData } from 'src/app/common/enum';
import * as mockData from '../../mockData/data.json';

@Component({
  selector: 'app-market-status',
  templateUrl: './market-status.component.html',
  styleUrls: ['./market-status.component.css']
})

export class MarketStatusComponent implements OnInit {
  public genderData: IGender[] = [];
  public tilesData!: ITilesData;

  constructor() { }

  ngOnInit() {
    this.genderData = mockData.genderData;
    this.tilesData = mockData.tiles;
  }

}
