import { appRoutes } from "./routes";
import { NavBarComponent } from "./nav/navbar.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EventsAppComponent } from "./events-app.component";

import { EventListComponent } from "./events/events-list.component";
import { EventService } from "./events/shared/event.service";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent,
    EventDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [EventService],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
