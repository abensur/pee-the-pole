import { acceptHMRUpdate, defineStore } from 'pinia'
import TabWav from '~/assets/tab.wav'

const soundMap: any = {
  tab: {
    src: TabWav,
  },
}
export const useAudioStore = defineStore('audio', () => {
  const playAudio = (audio: string) => {
    soundMap[audio].instance.currentTime = 0
    soundMap[audio].instance.pause()
    soundMap[audio].instance.play()
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
