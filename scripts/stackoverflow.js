const fs = require('fs')
const request = require('request')
const semver = require('semver')

const ids = '6915310;5627782;7001243;7127228;7418775;7167647;9208997;7573514';


const url = `https://api.stackexchange.com/2.2/users/${ids}?order=desc&sort=reputation&site=stackoverflow`
const options = {
    url: url,
    method: 'GET',
    crossDomain: true,
    responseType: 'json'
}

request(options, (error, response, body) => {
    if (error) return console.log(error)
    if (response.statusCode !== 200) return console.error(response)

    fs.writeFileSync('src/data/stackoverflow.json', JSON.stringify(body, null, 2))

})
