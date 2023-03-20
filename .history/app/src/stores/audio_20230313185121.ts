import { acceptHMRUpdate, defineStore } from 'pinia'
import TabWav from '~/assets/tab.wav'
const soundMap = {
  tab: TabWav,
}
export const useAudioStore = defineStore('audio', () => {
  const sound = new Audio()

  const playAudio = (audio: string) => {
    sound.src = audio
    sound.play()
  }

  return {
    playAudio,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAudioStore, import.meta.hot))
