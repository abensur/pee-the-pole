import { acceptHMRUpdate, defineStore } from 'pinia'
import TabWav from '~/assets/tab.wav'
const soundMap: any = {
  tab: {
    src: TabWav,
    instance: null
  },
}
export const useAudioStore = defineStore('audio', () => {
  const sound = new Audio()

  const playAudio = (audio: string) => {
    sound.src = soundMap[audio]
    sound.play()
  }

  const preloadAudio = () => {
    Object.keys(soundMap).forEach((key) => {
      const audio = new Audio()
      audio.src = soundMap[key]
    })
  }

  return {
    playAudio,
    preloadAudio
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAudioStore, import.meta.hot))
