import { formatEventDate } from "../utils/date.js";

export function createEventCard(event) {
  return `
<article class="event-card">

  <div class="event-card__image">
    <img src="${event.image}" alt="${event.title}">
  </div>

  <div class="event-card__content">

    <div class="event-card__details">
      <span class="event-card__item">
        ${formatEventDate(event.date)}
      </span>
    </div>

    <h3 class="event-card__title">
      ${event.title}
    </h3>

    <div class="event-card__meta">
      ${event.category} (${event.distance} km)
    </div>

    ${
      event.type === "online"
        ? ` <div class="event-card__top">
                <span class="event-card__badge">
                  <svg
                    class="event-card__icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M17 10.5V7c0-1.1-.9-2-2-2H3C1.9 5 1 5.9 1 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3.5l6 4v-11l-6 4z"
                      fill="currentColor"
                    />
                  </svg>
                  Online Event
                </span>
              
              </div>
                <span class="event-card__badge1">Online Event</span>`
        : ""
    }

    ${
      event.attendees
        ? `<span class="destop-hidden__attendees">
            ${event.attendees} attendees
          </span>`
        : ""
    }

  </div>
</article>
`;
}
