import "../stylesheets/all.css"
import { Application } from 'stimulus'
import Audio from 'stimulus-audio'
import Player from './controllers/player_controller'
import Podcast from './controllers/podcast_controller'

const application = Application.start()
application.register('audio', Audio)
application.register('player', Player)
application.register('podcast', Podcast)
