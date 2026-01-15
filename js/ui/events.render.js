import { createEventCard } from "./eventCard.js";

export function renderEvents(events, container) {
  container.innerHTML = "";

  events.forEach((event) => {
    container.insertAdjacentHTML("beforeend", createEventCard(event));
  });
}
