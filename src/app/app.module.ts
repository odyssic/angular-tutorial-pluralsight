import { NavBarComponent } from "./nav/navbar.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import * as $ from "jquery";
//
$("#elemId").width();

import { EventsAppComponent } from "./events-app.component";

import { EventListComponent } from "./events/events-list.component";
import { EventService } from "./events/shared/event.service";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule],
  providers: [EventService],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
