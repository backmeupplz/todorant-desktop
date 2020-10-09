import { remote } from 'electron'
import { updateSettings } from '@/public/scripts/preloader'

export function createMenu() {
  const settings = new remote.MenuItem({
    label: 'Settings',
    submenu: [
      {
        label: 'Launch on boot',
        type: 'checkbox',
        checked: window.localStorage.getItem('isLaunchEnabled') === 'true',
        click: () => updateSettings(),
      },
    ],
  })

  const menu = new remote.Menu()

  menu.append(settings)
  return menu
}

export default createMenu
