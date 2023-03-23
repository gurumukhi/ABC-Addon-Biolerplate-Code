// Logger is disabled by default
let logger = message => {
  // Nothing
}

console.log('Initializing Youtube Screenshot Addon')

let storageItem = browser.storage.local.get()
storageItem.then(result => {
  if (result.YouTubeScreenshotAddonisDebugModeOn) {
    logger = message => {
      console.log(`Youtube Screenshot Addon: ${message}`)
    }

    logger('Logger enabled')
  }

  document.querySelector('#country-code').innerHTML = 'LNMIIT'
})
