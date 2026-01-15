export function filterEvents(events, activeFilters) {
  return events.filter((event) => {
    if (
      activeFilters.type &&
      activeFilters.type !== "Any type" &&
      event.type !== activeFilters.type
    )
      return false;

    if (
      activeFilters.distance &&
      activeFilters.distance !== "Any distance" &&
      event.distance > Number(activeFilters.distance)
    ) {
      return false;
    }
    if (
      activeFilters.category &&
      activeFilters.category !== "Any category" &&
      event.category !== activeFilters.category
    )
      return false;

    return true;
  });
}
