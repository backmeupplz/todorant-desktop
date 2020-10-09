import { Titlebar, Color } from 'custom-electron-titlebar'
import menu from '@/menu'
import ElectronStore from '@/store/'
// import store from '@/store'

let titlebar: Titlebar

window.addEventListener('DOMContentLoaded', () => {
  titlebar = new Titlebar({
    backgroundColor: Color.fromHex(ElectronStore.color!),
    menu: menu(),
  })
  fixStyles()
})

window.addEventListener('click', (event) => {
  const darkElement = document.getElementsByClassName(
    'v-sheet'
  )[0] as HTMLElement

  darkElement.style.backgroundColor === 'rgb(255, 255, 255)'
    ? updateColor('#fff')
    : updateColor('#121212')
})

function updateColor(color: string) {
  titlebar.updateBackground(Color.fromHex(color))
  ElectronStore.setColor(color)
}

function fixStyles() {
  // Fix wrong overflow becase of Titlebar (overflow: hidden setting in Titlebar doesnt work)

  const html = window.document.getElementsByTagName('html')[0] as HTMLElement
  html.style.overflowY = 'hidden'

  // Fix wrong margin because of titlebar
  const toolbar = window.document.getElementsByTagName('nav')[0] as HTMLElement
  toolbar.style.top = '30px'

  const appBar = window.document.getElementsByClassName(
    'v-app-bar'
  )[0] as HTMLElement
  appBar.style.top = '30px'
  appBar.style.width = '100vw'
}

export function updateSettings() {
  ElectronStore.setLaunchOnStart()
  titlebar.updateMenu(menu())
}
