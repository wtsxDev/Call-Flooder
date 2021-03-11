var twilio = require('twilio')

var accountId = 'ACf57f4bb3924803ba1424152dda90fae4'
var accountToken = 'ya10ad7d5529a30a02df6c7123ca867f'

var client = twilio(accountId, accountToken)
var INTERVAL = 10000 // 10 seconds

var count = 0

var call = function() {
  return client.calls.create({
    url: 'https://www.dropbox.com/s/80x2qx18vamjvi6/iwasnt.mp3l',
    to: '+447398237459',
    from: '+447427551189'
  }, function (err, res) {
    if (err) return console.error(err)
    count++
    console.log('number ', count, 'status: ', res.status)
  })
}

call()
setInterval(call, INTERVAL)

