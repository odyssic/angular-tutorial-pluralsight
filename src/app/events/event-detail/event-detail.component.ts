import { EventService } from "./../shared/event.service";
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"],
})
export class EventDetailComponent {
  event: any;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
