var path = require('path')
var os = require('os')
var name = require('git-user-name')

module.exports = function (source) {
  return {
    templates: [
      {
        name: './page',
        matches: function matches() {
          return source.isDirectory && /^pages?$/.test(source.basicData.dirName)
        },
        localData: {
          dirname:source.basicData.fileName
        },
        overwrite: false
      }
    ],
    globalData: {
      project: 'vue3t',
      author: name() || os.userInfo().username
    }
  }
}
