import { Routes } from "@angular/router";

import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { EventListComponent } from "./events/events-list.component";

export const appRoutes: Routes = [
  { path: "events", component: EventListComponent },
  { path: "events/:id", component: EventDetailComponent },
  {
    path: "",
    redirectTo: "/events",
    pathMatch: "full",
  },
];
