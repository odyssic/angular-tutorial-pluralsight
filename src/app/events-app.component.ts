import { EventListComponent } from "./events/events-list.component";
import { Component } from "@angular/core";

@Component({
  selector: "events-app",
  template: "<events-list></events-list>",
})
export class EventsAppComponent {
  title = "ng-fundamentals";
}
