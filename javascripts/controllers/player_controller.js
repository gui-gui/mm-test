import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["title", "play", "pause", "mute", "currentTime", "totalTime"]

  initialize () {
    this.element['audio'] = new Audio('data:audio/mpeg;base64,//OExAAAAAAAAAAAAEluZm8AAAAHAAAABAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P39/f39/f39/f39/f39/f39/f39/f39/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAJAa/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUxAAAAANIAAAAAExBTUUzLjk2LjFV//MUxAsAAANIAAAAAFVVVVVVVVVVVVVV//MUxBYAAANIAAAAAFVVVVVVVVVVVVVV//MUxCEAAANIAAAAAFVVVVVVVVVVVVVV')
    this.element.addEventListener('click', this._unlockAudio)
    this.element.addEventListener('touchstart', this._unlockAudio)
  }

  connect() {
    document.addEventListener('play-episode', this.playEpisode.bind(this))
    this.element.audio.addEventListener('timeupdate', this._timeupdate.bind(this))
    this.element.audio.addEventListener('ended', this.pause.bind(this))
  }

  disconnect() {
    document.removeEventListener('play-episode', this.playEpisode.bind(this))
    this.element.audio.removeEventListener('timeupdate', this._timeupdate.bind(this))
    this.element.audio.removeEventListener('ended', this.pause.bind(this))
  }

  playEpisode(event) {
    const {title, mp3} = event.detail
    if (this.titleTarget.innerText == title || !mp3) return
    this._render(title)
    this.element.audio.src = mp3
    this.play()
  }

  play() {
    this.element.audio.play().then(() => {
      this.totalTimeTarget.innerText = this._formatTime(this.element.audio.duration)
      this.pauseTarget.classList.remove('hidden')
      this.playTarget.classList.add('hidden')
      this.element.classList.remove('hidden')
    })
  }

  pause() {
    this.element.audio.pause()
    this.playTarget.classList.remove('hidden')
    this.pauseTarget.classList.add('hidden')
  }

  close() {
    this.element.audio.pause()
    this.element.audio.src = ""
    if (this.element.audio.muted) this.toggleMute()
    this._render("")
    this.element.classList.add('hidden')
  }

  toggleMute() {
    this.muteTarget.classList.toggle('is-muted', !this.element.audio.muted)
    this.element.audio.muted = !this.element.audio.muted
  }

  _timeupdate() {
    this.currentTimeTarget.innerText = this._formatTime(this.element.audio.currentTime)
  }

  _formatTime(time) {
    const mins = `0${Math.floor(time / 60)}`.slice(-2);
    const secs = `0${Math.floor(time % 60)}`.slice(-2);
    return `${mins}:${secs}`
  }

  _render(title) {
    this.titleTarget.innerText = title
  }

  _unlockAudio = () => {
    this.element.removeEventListener('click', this._unlockAudio)
    this.element.removeEventListener('touchstart', this._unlockAudio)
    this.element['audio']
      .play()
      .then(() => {})
      .catch(() => {})
  }
}
