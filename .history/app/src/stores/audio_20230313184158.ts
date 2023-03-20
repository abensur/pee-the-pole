import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAudioStore = defineStore('audio', () => {
  const importAudios = async () => {
    const sound: any = await import('./assests/tab.wav');
    const audio: HTMLAudioElement = new Audio(sound);
    audio.play()
  }

  return {
    importAudios,
  }

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
