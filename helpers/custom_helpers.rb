module CustomHelpers
  def podcast_mp3_url(podcast)
    if podcast.data.podcast_sample_mp3
      "/podcast_mp3/samples/#{podcast.data.podcast_sample_mp3}"
    elsif podcast.data.podcast_complete_mp3
      "/podcast_mp3/complete/#{podcast.data.podcast_complete_mp3}"
    end
  end
end
