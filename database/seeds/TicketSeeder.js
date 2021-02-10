'use strict'

/*
|--------------------------------------------------------------------------
| TicketSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Ticket = use('App/Models/Ticket')
const Uuid = require('uuid/v4')

class TicketSeeder {
  async run () {
    const ticket1 = new Ticket()
    ticket1.id = Uuid()
    ticket1.ticket_detail = 'Contact Email not Linked'
    ticket1.customer_name = 'Tom Cruise'
    ticket1.status = 0
    await ticket1.save()

    const ticket2 = new Ticket()
    ticket2.id = Uuid()
    ticket2.ticket_detail = 'Adding images to featured post'
    ticket2.customer_name = 'Matt Damon'
    ticket2.status = 0
    await ticket2.save()

    const ticket3 = new Ticket()
    ticket3.id = Uuid()
    ticket3.ticket_detail = 'When will I be charged this month?'
    ticket3.customer_name = 'Robert Downey'
    ticket3.status = 0
    await ticket3.save()

    const ticket4 = new Ticket()
    ticket4.id = Uuid()
    ticket4.ticket_detail = 'Payment not going through'
    ticket4.customer_name = 'Christian Bale'
    ticket4.status = 0
    await ticket4.save()

    const ticket5 = new Ticket()
    ticket5.id = Uuid()
    ticket5.ticket_detail = 'Unable to add replies'
    ticket5.customer_name = 'Henry Cavil'
    ticket5.status = 0
    await ticket5.save()

    const ticket6 = new Ticket()
    ticket6.id = Uuid()
    ticket6.ticket_detail = 'Downtime since last week'
    ticket6.customer_name = 'Chris Evans'
    ticket6.status = 0
    await ticket6.save()

    const ticket7 = new Ticket()
    ticket7.id = Uuid()
    ticket7.ticket_detail = 'Referral Bonus'
    ticket7.customer_name = 'Sam Smith'
    ticket7.status = 0
    await ticket7.save()

    const ticket8 = new Ticket()
    ticket8.id = Uuid()
    ticket8.ticket_detail = 'How do I change my password?'
    ticket8.customer_name = 'Steve Rogers'
    ticket8.status = 0
    await ticket8.save()
  }
}

module.exports = TicketSeeder
