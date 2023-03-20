<script setup lang="ts">
// import minimap from '~/assets/minimap.png'
import { Menu } from '~/types'

const mapContainer = ref<HTMLDivElement>()
const mapInstance = ref<any>()
const openedMenu = ref<Menu | undefined>()
const audioStore = useAudioStore()

const handleClick = (menu?: Menu) => {
  if (menu || openedMenu.value)
    audioStore.playAudio('change')

  setTimeout(() => {
    openedMenu.value = openedMenu.value === menu ? undefined : menu
  }, 200)
}

const initMap = (position: GeolocationPosition) => {
  const PLACE = { lat: -23.561487742630142, lng: -46.65588190255657 }
  mapInstance.value = new google.maps.Map(mapContainer.value, {
    mapId: '673de7f81b936859',
    center: PLACE,
    zoom: 18,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
  })

  const center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)

  mapInstance.value.setCenter(center)

  const numRows = 3;
  const numCols = 3;
  const cellWidth = 0.1;
  const cellHeight = 0.1;
  const startLat = center.lat();
  const startLng = center.lng();

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const lat = startLat + row * cellHeight + cellHeight / 2;
      const lng = startLng + col * cellWidth + cellWidth / 2;
      new google.maps.Marker({
        position: {lat, lng},
        map: mapInstance.value,
        title: "Marker at " + lat + ", " + lng
      });
    }
  }

  // get nearby places (max radius) and save as csv

  // const service = new google.maps.places.PlacesService(mapInstance.value)

  // const request = {
  //   location: center,
  //   type: ['point_of_interest'],
  //   radius: 50000,
  // }

  // service.nearbySearch(request, (results: any, status: any) => {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     const csv = results.map((result: any) => {
  //       const location = result.geometry.location.toJSON()
  //       const locationId = result.place_id
  //       const name = result.name
  //       return `"${name}";${location.lat};${location.lng};${locationId}`
  //     }).join('\n')

  //     const blob = new Blob([csv], { type: 'text/csv' })

  //     const link = document.createElement('a')
  //     link.href = window.URL.createObjectURL(blob)
  //     link.download = 'places.csv'
  //     link.click()

  //     console.log(csv)
  //   }
  // })

  // mapInstance.value.addListener('center_changed', showCenterButton.value = true)
}

onMounted(() => {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(initMap)
})
</script>

<template>
  <div class="pp">
    <header>
      infos
    </header>
    <main>
      <section
        class="upgrade"
        :class="{
          '--open': openedMenu === Menu.Upgrade,
        }"
      >
        <upgrades />

        <button class="toggle left" @click="handleClick(Menu.Upgrade)">
          &gt;
        </button>
      </section>
      <section class="ppbot text-center" @click="handleClick(undefined)">
        <div ref="mapContainer" h-full w-full />
        <!-- <div class="map">
          <img :src="minimap" alt="map">
        </div> -->
        ppbot <br>({{ openedMenu }})
      </section>
      <section
        class="equip"
        :class="{
          '--open': openedMenu === Menu.Equip,
        }"
      >
        <button class="toggle right" @click="handleClick(Menu.Equip)">
          &lt;
        </button>
        equip
      </section>
    </main>
    <footer>
      <pp-menu />
    </footer>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>
.pp {
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
}
.pp header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: red;
}
.pp main {
  height: 100%;
  flex: 1;
  background: var(--pink);
  position: relative;
  overflow: hidden;
}

.pp main section {
  width: 50vw;
  height: 100%;
  position: absolute;
}
.pp main section.ppbot {
  width: 100vw;
}

.pp footer {
  flex: 0 80px;
  background: var(--lavender);
  outline: 4px solid var(--black);
  z-index: 2;
}

.upgrade {
  left: -50vw;
  background: var(--lavender);
  background: white;
  z-index: 2;
  transition: left 0.3s ease;
  border: 4px solid var(--black);
  border-left: 0;
  border-top: 0;
  border-bottom-right-radius: 1rem;
}
.upgrade.--open {
  left: 0;
}
.equip {
  right: -50vw;
  background: var(--blue);
  z-index: 2;
  transition: right 0.3s ease;
}
.equip.--open {
  right: 0;
}

.ppbot {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.ppbot .map {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  line-height: 10rem;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
}

.toggle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.5s;
  font-size: 2rem;
  background: transparent;
  line-height: 1;
  padding-top: 3px;
  width: 80px;
  height: 80px;
  font-weight: bold;
  color: var(--black);

}
.toggle.left {
  right: -80px;
}
.toggle.right {
  left: -80px;
}
.--open .left,
.--open .right {
  transform: translateY(-50%) scaleX(-1);
}
</style>
