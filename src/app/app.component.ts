import { Component } from '@angular/core';
import { Satellite } from './satellite';
import { JsonPipe } from '@angular/common';
import { SourceListMap } from 'source-list-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[] = [];
  displayList: Satellite[] = []; 

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function (response) {
      response.json().then(function (data) {

        let fetchedSatellites = data.satellites;
        for (let i = 0; i < fetchedSatellites.length; i++) {
          let satellite = {
            name: <string> fetchedSatellites[i].name,
            type: <string> fetchedSatellites[i].type,
            launchDate: <string> fetchedSatellites[i].launchDate,
            orbitType: <string> fetchedSatellites[i].orbitType,
            operational: <string> fetchedSatellites[i].operational
          }
          this.sourceList.push(satellite);
        }
        this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));

  }
        
  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
  
    this.displayList = matchingSatellites;
 }

}


