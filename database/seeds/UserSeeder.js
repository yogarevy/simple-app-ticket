'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
const Uuid = require('uuid/v4')

class UserSeeder {
  async run () {
    const password1 = 'yoga1234'
    const user1 = new User()
    user1.id = Uuid()
    user1.name = 'Yoga'
    user1.email = 'yoga@gmail.com'
    user1.password = password1
    user1.status = 1
    user1.is_admin = 1
    await user1.save()

    const password2 = 'revy1234'
    const user2 = new User()
    user2.id = Uuid()
    user2.name = 'Revy'
    user2.email = 'revy@gmail.com'
    user2.password = password2
    user2.status = 1
    user2.is_admin = 1
    await user2.save()

    const password3 = 'setiadi1234'
    const user3 = new User()
    user3.id = Uuid()
    user3.name = 'Setiadi'
    user3.email = 'setiadi@gmail.com'
    user3.password = password3
    user3.status = 1
    user3.is_admin = 1
    await user3.save()
  }
}

module.exports = UserSeeder
