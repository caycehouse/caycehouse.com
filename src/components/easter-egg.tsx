import React from "react"
import Konami from "react-konami-code"
import YTPlayer from "yt-player"

const run = () => {
  const player = new YTPlayer("#___gatsby", {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    keyboard: false,
    related: false,
  })

  document.body.style.overflow = "hidden"

  player.load("IwwSRnVul3E", true)
  player.setVolume(100)

  player.on("ended", () => {
    player.play()
  })
}

const EasterEgg = () => {
  return (
    <>
      <Konami action={run}></Konami>
    </>
  )
}

export default EasterEgg
