<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import { useStore } from "../store";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => {
  const switcher = document.querySelector(".fc-dateswitcher-button");
  if (!switcher) return;
  switcher.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>
`;
});

function formatHeadWeekday(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", { weekday: "short" })
    .format(date)
    .toString()
    .replace(".", "");
}

function formatEventTime(date: string) {
  const d = new Date(date);
  const h = d.getHours();
  const m = d.getMinutes();
  return `${(h < 10 ? "0" : "") + h}:${(m < 10 ? "0" : "") + m} `;
}
</script>

<template>
  <div class="w-full h-full p-10">
    <FullCalendar :options="store.options">
      <template #dayHeaderContent="{ date, isToday }">
        <div class="text-gray-400 hover:text-white">
          <p class="uppercase m-0 text-sm">{{ formatHeadWeekday(date) }}</p>
          <p
            :class="{
              'rounded-full w-8 h-8 m-0 mt-1 text-xl': true,
              'bg-amber-400 text-black': isToday,
            }"
          >
            {{ date.getDate() }}
          </p>
        </div>
      </template>

      <template #slotLabelContent="{ date, text }">
        <div class="w-18 text-center">{{ text }}</div>
      </template>
      <template #nowIndicatorContent="{ date }">
        <div>
          {{ formatEventTime(date) }}
        </div>
      </template>

      <template #eventContent="{ event }">
        <div class="px-4 py-2 h-full">
          <p class="font-semibold">{{ event.title }}</p>
          <p class="">
            {{ formatEventTime(event.start) }} -
            {{ formatEventTime(event.end) }}
          </p>
        </div>
      </template>
    </FullCalendar>
  </div>
</template>

<style>
.fc-day-today {
  background-color: transparent !important;
}
.fc.fc-scrollgrid {
  border: none !important;
}
.fc-scrollgrid.fc-scrollgrid-liquid {
  border: none;
}
.fc-theme-standard td,
.fc-theme-standard th {
  border-left: none;
}
.fc-day.fc-timegrid-col {
  border-right: none;
}
/* .fc-theme-standard th, */
.fc-theme-standard td:first-child {
  border: none;
  vertical-align: top;
}

.fc-theme-standard td:first-child + td {
  border: none;
}

.fc-theme-standard td:not(:first-child) {
  border: none;
  /* border-top: 1px solid #ccc; */
  border-left: 0.01rem solid;
  /* border-right: 0.01rem solid #ccc; */
  @apply border-l-gray-100/50;
}
.fc .fc-timegrid-slot-minor {
  border: none;
  border-color: transparent;
}
.fc-timegrid-slot.fc-timegrid-slot-lane {
  border: none;
}

/* a.fc-col-header-cell-cushion { */
/*   @apply text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg mb-2 hover:!text-black leading-9; */
/* } */
/* a.fc-col-header-cell-cushion:hover { */
/*   @apply text-black bg-amber-400/90; */
/* } */
/**/
/* .fc-day-today a.fc-col-header-cell-cushion{ */
/*   @apply bg-amber-400 text-dark leading-9 ; */
/*    */
/* } */

/* toolbar */
.fc-toolbar-title {
  @apply font-normal text-sm;
}
.fc .fc-toolbar-title {
  @apply font-thin text-xl;
}
.fc-next-button,
.fc-prev-button {
  @apply !bg-transparent rounded-full w-8 h-8 flex items-center justify-center border-transparent hover:border-gray-100;
}
.fc-newEvent-button {
  @apply !bg-primaryDark text-black font-medium;
}
.fc-toolbar-chunk .fc-button-group {
  @apply space-x-2;
}
.fc-dateswitcher-button {
  background-color: transparent !important;
  border-radius: 50%;
  border: none;
}
.fc-dateswitcher-button {
  @apply !bg-transparent rounded-full border-none;
}

/*calendar table head*/
.fc-theme-standard th:first-child {
  border: none;
  border-bottom: 1px solid;
  @apply border-b-gray-100/50;
}
.fc-theme-standard th:not(:first-child) {
  @apply border-gray-100/50;
}
/*time grid*/
.fc-timegrid-col.fc-timegrid-axis {
  border: none;
}
.fc-timegrid-now-indicator-arrow {
  @apply bg-primaryDark text-black px-4 rounded-4xl;
}
.fc .fc-timegrid-now-indicator-arrow {
  @apply border-none;
}

.day-header {
  @apply flex flex-col;
}
.day-header__weekday {
}
.day-header__date {
  @apply inline-block text-white;
}

/*event*/
.fc-event {
  @apply bg-grey border-none shadow-none;
}
.fc-timegrid-event-harness-inset .fc-timegrid-event {
  box-shadow: none;
  @apply border-solid border-transparent hover:border-primary;
}
/* fc-day-sun */
</style>
