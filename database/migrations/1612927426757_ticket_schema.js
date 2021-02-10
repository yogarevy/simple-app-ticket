'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.uuid('id').primary().notNullable().unique()
      table.string('ticket_detail', 200).notNullable()
      table.string('customer_name', 50).notNullable()
      table.integer('status', 16).nullable().defaultTo(0).comment('1/0')
      table.uuid('last_modified_by').nullable()
      table.uuid('deleted_by').nullable()
      table.timestamp('deleted_at').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tickets')
  }
}

module.exports = TicketSchema
