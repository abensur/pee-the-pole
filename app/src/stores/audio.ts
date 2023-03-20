import { acceptHMRUpdate, defineStore } from 'pinia'
import TabWav from '~/assets/tab.wav'
import MenuMP3 from '~/assets/menu.mp3'
import ChangeMP3 from '~/assets/change.mp3'
import ClickMP3 from '~/assets/click.mp3'

const soundMap: any = {
  tab: {
    src: TabWav,
  },
  menu: {
    src: MenuMP3,
  },
  change: {
    src: ChangeMP3,
  },
  click: {
    src: ClickMP3,
  },
}

export const useAudioStore = defineStore('audio', () => {
  const playAudio = (key: string) => {
    soundMap[key].instance.currentTime = 0
    soundMap[key].instance.pause()
    soundMap[key].instance.play()
  }

  const preloadAudio = () => {
    Object.keys(soundMap).forEach((key) => {
      soundMap[key].instance = new Audio()
      soundMap[key].instance.preload = 'auto'
      soundMap[key].instance.src = soundMap[key].src
    })
  }

  return {
    playAudio,
    preloadAudio,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAudioStore, import.meta.hot))
