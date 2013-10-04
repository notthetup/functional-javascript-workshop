var input = require('../../input')

module.exports = input()
.wrap(function(words, extend) {

  function User(name, age) {
    this.name = name
    this.age = age
    console.info('NEW USER: ' + this)
  }

  User.prototype.isUser = function () {
    return true;
  }

  var originalCreate = Object.create

  Object.create = function() {
    throw new Error('Do not use Object.create!')
  }

  var BetterUser = extend(User)

  Object.create = originalCreate

  console.log('creating new BetterUsers:')

  console.log("new BetterUser('alice', 21)")
  var alice = new BetterUser('alice', 21)
  console.log(typeof alice.isUser == 'function' ? "Inherits from User" : "Doesn't inherit all from User"  )
  console.log('')

  console.log("new BetterUser('joe', 20)")
  var joe = new BetterUser('joe', 20)
  console.log(typeof joe.isUser == 'function' ? "Inherits from User" : "Doesn't inherit all from User"  )
  console.log('')

  //Object.create = Object.prototype.create
})
