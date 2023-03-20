import { acceptHMRUpdate, defineStore } from 'pinia'
import TabWav from '~/assets/tab.wav'
export const useAudioStore = defineStore('audio', () => {
  const importAudios = async () => {
    const audio: HTMLAudioElement = new Audio(TabWav)
    audio.play()
  }

  return {
    importAudios,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAudioStore, import.meta.hot))
