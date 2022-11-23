import { Controller } from 'stimulus'

export default class extends Controller {
  static values = {
    mp3: String,
    title: String
  }

  play() {
    const customEvent = new CustomEvent('play-episode', {
      detail: {
        mp3: this.mp3Value,
        title: this.titleValue,
      }
    })

    document.dispatchEvent(customEvent)
  }
}
