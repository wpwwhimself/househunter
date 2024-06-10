import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition(":enter", [
    style({ opacity: 0, transform: "translateY(5%)" }),
    animate("0.5s ease-in-out", style({ opacity: 1, transform: "translateY(0)" })),
  ]),
  transition(":leave", [
    style({ opacity: 1, transform: "translateY(0)" }),
    animate("0.5s ease-in-out", style({ opacity: 0, transform: "translateY(-5%)" })),
  ]),
])
