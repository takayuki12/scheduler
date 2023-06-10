import { defineStore } from "pinia";
import { CalendarOptions, EventSourceInput } from "@fullcalendar/core";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import { h } from "vue";
import { newEvent } from "./components/fullcalendar/toolbar/new-event-btn";
import { dateSwitcher } from "./components/fullcalendar/toolbar/date-switcher";

type State = {
  events: EventSourceInput[];
};

export const useStore = defineStore("store", {
  state: () =>
    ({
      events: [
        {
          id: 1,
          title: "Fetch john",
          start: new Date("2023-06-05T08:00:00.388Z"),
          end: new Date("2023-06-05T10:00:00.388Z"),
        },
      ],
    } as State),
  getters: {
    options: (state) => {
      return {
        initialView: "timeGridWeek",
        plugins: [daygridPlugin, timegridPlugin],
        events: state.events,
        height: "100%",
        allDaySlot: false,
        nowIndicator: true,
        customButtons: {
          newEvent: newEvent(),
          dateswitcher: dateSwitcher()
        },
        dayHeaderFormat: { weekday: "short", day: "numeric" },
        slotMinTime: "08:00",
        slotMaxTime: "20:00",
        slotDuration: "02:00:00",
        eventTimeFormat: {
          hour12: false,
        },
        weekends: false,
        firstDay: 1,
        contentHeight: "100%",
        expandRows: true,
        headerToolbar: {
          start: "prev,dateswitcher,next",
          center: "title",
          end: "newEvent",
        },
        slotLabelFormat: { hour12: true, hour: "numeric" },
        titleFormat: { month: "long", year: "numeric" },
      } as CalendarOptions;
    },
  },
});
