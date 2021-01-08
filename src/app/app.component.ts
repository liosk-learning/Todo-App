import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import * as faker from 'faker';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoList = [];

  inProgressList = [];
  doneList = [];
  constructor() {
     //this.toDoList1 = Array.from({ length: 5 }).map(() => faker.hacker.phrase());
    
 this.toDoList = [{
   "id" : 10,
 		"title": "Set up a call with the Order Management team.",
    "updateTime" : "05/10/2020 12:34PM",
    "priority" : "High"
 	},
 	{
     "id" : 11,
		"title": "Discuss new GTT disputes",
    "updateTime" : "05/01/2020 8:34AM",
    "priority" : "Medium"
 	}
 ];
    // debugger;
    this.inProgressList = [{
      "id" : 12,
 		"title": "Issue credit for service outage.",
    "updateTime" : "05/10/2020 11:24PM",
    "priority" : "Low"
 	},
 	{
     "id" : 13,
		"title": "Investigate root cause.",
    "updateTime" : "05/01/2020 7:55AM",
    "priority" : "Medium"
 	},
 	{
     "id" : 14,
		"title": "Review Claim ATT12345",
    "updateTime" : "05/09/2020 2:47PM",
    "priority" : "High"
     
 	}
 ];
    this.doneList = [{
      "id" : 15,
 		"title": "Process New Claims for today",
    "updateTime" : "05/10/2020 11:24PM",
    "priority" : "Low"
 	},
 	{
		"title": "Credit Claim ATT5678",
    "updateTime" : "05/01/2020 7:55AM",
    "priority" : "Medium"
 	}];

  }

// see https://stackoverflow.com/questions/53144939/angular-cdk-connecting-multiple-drop-zones-with-cdkdroplistconnectedto


  trash(list : any[], index)
  {
    // alert('kiko!'+ index);

    list.splice(index,1);

  }


  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  onEntered(enter) {
    console.log('ee', enter);
  }
}
