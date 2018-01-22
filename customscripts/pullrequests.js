const fs = require('fs')
const request = require('request')
const semver = require('semver')
const moment = require('moment')
const token = '3f61d3dee6babfd6f057449b71a760bfdfbcc4e3'

const usersek = require('../src/data/users.json')

let users = []
usersek.map(u => {
    users.push(u.githubUsername);
})

const prArray = [];
const startDate = moment().startOf('quarter').format('YYYY-MM-DD');
const saveable = {
    total_count: 0,
    pullrequests: []
}

for (var i = 0; i < users.length; i++) {
    const username = users[i];
    const url = 'https://api.github.com/search/issues?q=author%3A' + username + '+created:>=' + startDate + '&type=pr'
    const options = {
        url: url,
        json: true,
        headers: {
            'user-agent': 'Sensenet',
            'Authorization': 'token ' + token
        }
    }
    request(options, (error, response, body) => {
        if (error) return console.log(error)
        if (response.statusCode !== 200) return console.error(response)

        const count = saveable.total_count + body.total_count
        saveable.total_count = count

        let byUser = {
            username: username,
            count: body.total_count,
            items: body.items,
            user: null
        }

        const userurl = 'https://api.github.com/users/' + username
        const options2 = {
            url: userurl,
            json: true,
            headers: {
                'user-agent': 'Sensenet',
                'Authorization': 'token ' + token
            }
        }

        request(options2, (error, response, body) => {
            if (error) return console.log(error)
            if (response.statusCode !== 200) return console.error(response)

            byUser.user = body
            saveable.pullrequests.push(byUser)

            fs.writeFileSync('src/data/pullrequests.json', JSON.stringify(saveable, null, 2))
        })
    })
}
