(async function () {
  const onlineVersion = '1.4.0'

  compare = (a, b) => {
    if (a === b) {
      return 0
    }

    var aComponents = a.split('.')
    var bComponents = b.split('.')

    var len = Math.min(aComponents.length, bComponents.length);

    // loop while the components are equal
    for (var i = 0; i < len; i++) {
      // A bigger than B
      if (parseInt(aComponents[i]) > parseInt(bComponents[i])) {
        return 1
      }

      // B bigger than A
      if (parseInt(aComponents[i]) < parseInt(bComponents[i])) {
        return -1
      }
    }

    // If one's a prefix of the other, the longer one is greater.
    if (aComponents.length > bComponents.length) {
      return 1
    }

    if (aComponents.length < bComponents.length) {
      return -1
    }

    // Otherwise they are the same.
    return 0
  }

  const remote = require('electron').remote
  const currentVersion = remote.app.getVersion()

  if (compare(currentVersion, onlineVersion) < 0) {
    remote.dialog.showMessageBox(remote.getCurrentWindow(), {
      type: 'question',
      buttons: ['取消 Cancel', `升级 Update (v${onlineVersion})`],
      title: 'Update',
      message: `当前有新版本，是否升级? \nNew version detected.`
    }).then(choice => {
      if (choice.response === 1) {
        remote.shell.openExternal('ms-windows-store://pdp/?productid=9PD44Z13HZP4')
      }
    })
  }
})()
