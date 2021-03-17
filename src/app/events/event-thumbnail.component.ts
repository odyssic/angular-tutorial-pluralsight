import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <div [routerLink]="['/events', event.id]">
      <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event?.date }}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
          Time: {{ event?.time }}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>

        <div>Price:\${{ event?.price }}</div>
        <div>
          <div *ngIf="event?.location">
            <span>Location: {{ event?.location.address }}</span>
            <span class="pad-left"
              >{{ event?.location.city }}, {{ event?.location.country }}</span
            >
          </div>
        </div>
        <div *ngIf="event?.onlineurl">
          <div>Online URL: {{ event?.onlineUrl }}</div>
        </div>
      </div>
    </div>
  `,

  styles: [
    `
      .bold {
         {
          font-weight: bold;
        }
      }
      .green {
        color: #003300 !important;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any = [];

  getStartTimeClass() {
    if (this.event && this.event.time === "8:00 am") return "green bold";
    return "";
  }
}
