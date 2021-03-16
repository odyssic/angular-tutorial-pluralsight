import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
  template: ` <hr />
    <div>
      <h1>
        Upcoming Angular Events
      </h1>

      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>`,
})
export class EventListComponent implements OnInit {
  events: any[];
  constructor(private EventService: EventService) {}

  ngOnInit() {
    this.events = this.EventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    console.log(eventName);
  }
}
