import "../stylesheets/all.css"
import { Application } from 'stimulus'
import Player from './controllers/player_controller'
import Podcast from './controllers/podcast_controller'
import * as Turbo from "@hotwired/turbo"

const application = Application.start()
application.register('podcast', Podcast)
application.register('player', Player)
