import { eventsStore } from "../data/events.data.js";
import { renderEvents } from "../ui/events.render.js";
import { filterEvents } from "../services/events.filter.js";

const list = document.getElementById("events-list");

const activeFilters = {
  type: "Any type",
  distance: "Any distance",
  category: "Any category",
};

// подписка на все select
document.querySelectorAll(".events-filter").forEach((select) => {
  select.addEventListener("change", () => {
    activeFilters[select.name] = select.value;

    const filtered = filterEvents(eventsStore, activeFilters);
    renderEvents(filtered, list);
  });
});

export function initEventsPage() {
  const container = document.querySelector("#events-list");
  if (!container) return;

  renderEvents(eventsStore, list);
}
