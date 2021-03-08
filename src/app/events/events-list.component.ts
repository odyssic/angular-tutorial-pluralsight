import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: ` <div>
    <h1>
      Upcoming Angular Events
    </h1>
    <event-thumbnail
      (eventClick)="handleEventClicked($event)"
      [event]="event1"
    ></event-thumbnail>
  </div>`,
})
export class EventListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2222",
    time: "10 am",
    price: 599.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England",
    },
  };

  handleEventClicked(data) {
    console.log("received:", data);
  }
}
