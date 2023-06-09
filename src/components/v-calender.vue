<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div class="w-full h-full">
    <FullCalendar :options="store.options"> </FullCalendar>
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

a.fc-col-header-cell-cushion {
  @apply text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg mb-2 hover:!text-black leading-9;
}
a.fc-col-header-cell-cushion:hover {
  @apply text-black bg-amber-400/90;
}

.fc-day-today a.fc-col-header-cell-cushion{
  @apply bg-amber-400 text-dark leading-9 ;
  
}


/* toolbar */
.fc-toolbar-title {
  @apply font-normal text-sm;
}
.fc .fc-toolbar-title {
@apply font-thin text-xl;
}


/*calendar table head*/
.fc-theme-standard th:first-child {
  border:none;
    border-bottom: 1px solid;
  @apply border-b-gray-100/50;
}
.fc-theme-standard th:not(:first-child) {
  @apply border-gray-100/50;
  
}
/* fc-day-sun */
</style>
