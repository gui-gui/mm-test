import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["title", "play", "pause", "stop", "mute", "currentTime", "totalTime"]

  connect() {
    document.addEventListener('play-sample', this.playSample.bind(this))
    document.body.audio.addEventListener('timeupdate', this._timeupdate.bind(this))
  }

  disconnect() {
    document.removeEventListener('play-sample', this.playSample.bind(this))
    document.body.audio.removeEventListener('timeupdate', this._timeupdate.bind(this))
  }

  playSample(event) {
    const {title, mp3} = event.detail
    document.body.audio.src = mp3
    this._render(title)
    this.play()
  }

  play() {
    document.body.audio.play().then(() => {
      this.totalTimeTarget.innerText = this._formatTime(document.body.audio.duration)
    })
    this.pauseTarget.classList.remove('hidden')
    this.playTarget.classList.add('hidden')
  }

  pause() {
    document.body.audio.pause()
    this.playTarget.classList.remove('hidden')
    this.pauseTarget.classList.add('hidden')
  }

  stop() {
    document.body.audio.pause()
    document.body.audio.src = ""
    this.element.classList.add('hidden')
  }

  mute(event) {
    event.currentTarget.classList.toggle('is-muted', !document.body.audio.muted)
    document.body.audio.muted = !document.body.audio.muted
  }

  _timeupdate() {
    this.currentTimeTarget.innerText = this._formatTime(document.body.audio.currentTime)
  }

  _formatTime(time) {
    const mins = `0${Math.floor(time / 60)}`.slice(-2);
    const secs = `0${Math.floor(time % 60)}`.slice(-2);
    return `${mins}:${secs}`
  }

  _render(title) {
    this.element.classList.remove('hidden')
    this.titleTarget.innerText = title
  }
}
