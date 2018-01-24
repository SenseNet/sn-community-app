const fs = require('fs')
const request = require('request')
const semver = require('semver')
const token = 'e2eb16d00617762b7ff77aec7507bf689e35afe8'

const repos = [
  'sensenet',
  'sn-client-js',
  'sn-client-dotnet',
  'sn-webpages',
  'sn-client-cli',
  'sn-redux',
  'sensenet.github.io',
  'sn-dms-demo',
  'sn-angular2-redux-todo-app',
  'sn-controls-aurelia',
  'sn-preview',
  'sn-benchmark',
  'sn-vue-redux-todo-app',
  'sn-controls-react',
  'sn-oauth-google',
  'sn-client-auth-google',
  'sn-react-redux-todo-app',
  'sn-demo',
  'sn-azuresearch',
  'sn-installer',
  'sn-vs-projecttemplates',
  // 'sn-resources',
  'sn-admin',
  'sn-workspaces',
  'sn-notification',
  'sn-workflow',
  'sn-security',
  'sn-client-dotnet',
  'sn-taskmanagement',
  'sn-tools',
  'awesome-sensenet'
]
const issueArray = [];

for (var i = 0; i < repos.length; i++) {
  const name = repos[i];
  const options = {
    url: 'https://api.github.com/repos/sensenet/' + name + '/issues?state=open&per_page=100',
    json: true,
    headers: {
      'user-agent': 'Sensenet',
      'Authorization': 'token ' + token
    }
  }
  request(options, (error, response, body) => {
    if (error) return console.log(error)
    if (response.statusCode !== 200) return console.error(response)
    const issues = body
      .map(issue => {
        issueArray.push(issue)
      })
    fs.writeFileSync('src/data/issues.json', JSON.stringify(issueArray, null, 2))
  })
}