import { useState } from 'react'
import YouTube from 'react-youtube'

export function VideoPLayerYoutube ({ videoId }) {
  const [playerReady, setPlayerReady] = useState(false)

  const onReady = () => {
    setPlayerReady(true)
  }
  return (
    <>
      {playerReady
        ? null
        : (
          <img
            src='https://i.ytimg.com/vi/_API66_gvnk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDogQyh_MA8=&rs=AOn4CLAhmL3Y-oXBuLxsUuUyYi0sgnCcXA' alt='Video Poster'
            className='w-100'
          />
          )}
      <YouTube
        videoId={videoId}
        opts={{
          height: '300px',
          width: '100%',
          playerVars: {
            autoplay: 0, // Autoplay the video
            controls: 1, // Show video player controls
            modestbranding: 1, // Remove YouTube logo from controls
            loop: 0, // Loop the video
            playsinline: 0, // Play video inline on mobile devices
            mute: 1 // Mute the video for autoplay to work in most browsers
          }
        }}
        onReady={onReady}
      />
    </>
  )
}
