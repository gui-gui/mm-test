require "middleman-core"

module CustomHelpers
  def podcast_mp3_url(podcast)
    if podcast.data.podcast_sample_mp3
      "/podcast_mp3/samples/#{podcast.data.podcast_sample_mp3}"
    elsif podcast.data.podcast_complete_mp3
      "/podcast_mp3/complete/#{podcast.data.podcast_complete_mp3}"
    end
  end

  def current_link_to(*arguments, aria_current: "page", **options, &block)
    if block_given?
      path = arguments[0]
    else
      path = arguments[1]
    end

    link_options = options.dup

    if path.chomp('/') == current_page.url.chomp('/')
      link_options.merge!("aria-current" => aria_current)
    end

    link_to(*arguments, link_options, &block)
  end
end


