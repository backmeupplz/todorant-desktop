import AutoLaunch from 'auto-launch'

class ElectronStore {
  color = window.localStorage.getItem('color') || '#fff'

  launchOnStart = new AutoLaunch({
    name: 'Todorant',
  })

  setColor = (color: string) => {
    window.localStorage.setItem('color', color)
  }

  setLaunchOnStart() {
    const isEnabled = window.localStorage.getItem('isLaunchEnabled') === 'true'
    if (isEnabled) {
      this.launchOnStart.disable()
      window.localStorage.setItem('isLaunchEnabled', 'false')
    } else {
      this.launchOnStart.enable()
      window.localStorage.setItem('isLaunchEnabled', 'true')
    }
  }
}

export default new ElectronStore()
