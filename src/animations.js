// Library import
import { animate, stagger } from "motion";

const els = document.querySelectorAll("body > *");

export function animations() {
  animate(
    els,
    { scale: [0, 1] },
    {
      delay: stagger(0.1),
      duration: 0.5,
      easing: [0.22, 0.03, 0.26, 1],
    }
  );
}
