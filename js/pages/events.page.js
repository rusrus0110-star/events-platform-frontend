import { eventsStore } from "../data/events.data.js";
import { renderEvents } from "../ui/events.render.js";

export function initEventsPage() {
  const container = document.querySelector("#events-list");
  if (!container) return;

  renderEvents(eventsStore, container);
}
