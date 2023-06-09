import { defineStore } from "pinia";
import { CalendarOptions, EventSourceInput } from "@fullcalendar/core";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import { h } from "vue";

type State = {
  events: EventSourceInput[];
};

export const useStore = defineStore("store", {
  state: () =>
    ({
      events: [],
    } as State),
  getters: {
    options: (state) => {
      return {
        initialView: "timeGridWeek",
        plugins: [daygridPlugin, timegridPlugin],
        events: state.events,
        height: "100%",
        allDaySlot: false,
        dayHeaderFormat: {  day: "numeric" },
        slotMinTime: "08:00",
        slotMaxTime: "20:00",
        // slotDuration: '00:15:00',
        eventTimeFormat: {
          hour12: false,
        },
        contentHeight: "100%",
        expandRows: true,
        headerToolbar: {
          start: "prev,next",
          center: "title",
          end: "",
        },
        slotLabelFormat:{hour12: false, hour: 'numeric', minute: 'numeric'},
        titleFormat: { month: 'long', year: 'numeric' },
      } as CalendarOptions;
    },
  },
});
