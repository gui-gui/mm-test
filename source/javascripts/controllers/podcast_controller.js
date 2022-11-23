import { Controller } from 'stimulus'

export default class extends Controller {
  static values = {
    sampleMp3: String,
    title: String
  }

  play() {
    const customEvent = new CustomEvent('play-sample', {
      detail: {
        mp3: this.sampleMp3Value,
        title: this.titleValue,
      }
    })

    document.dispatchEvent(customEvent)
  }
}
