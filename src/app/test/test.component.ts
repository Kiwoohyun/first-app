import {Component, OnInit} from '@angular/core';

declare var Cesium: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit  {

  ngOnInit() {
    const viewer = new Cesium.Viewer('cesiumContainer');
  }
}
