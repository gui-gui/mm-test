import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["trigger"]

  static values = {
    hiddenClass: {
      type: String,
      default: "hidden"
    },
    triggerActiveClass: {
      type: String,
      default: "is-active"
    }
  }

  toggle(event) {
    this.setActiveTrigger(event.currentTarget)
    const targetNames = event.currentTarget.dataset.triggerFor.split(",");
    document.querySelectorAll("[data-triggered-by]").forEach((target) => target.classList.toggle(this.hiddenClassValue, !targetNames.includes(target.dataset.triggeredBy)))
  }

  setActiveTrigger(element) {
    this.triggerTargets.forEach(trigger => {
      trigger.classList.toggle(this.triggerActiveClassValue, element == trigger)
    });
  }
}
