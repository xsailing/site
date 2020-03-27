require('electron').remote.dialog.showMessageBox(require('electron').remote.getCurrentWindow(), {
  type: 'info',
  buttons: ['取消'],
  title: '提示',
  message: '测试代码 Pro'
})
