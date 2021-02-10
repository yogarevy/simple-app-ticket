'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Ticket = use('App/Models/Ticket')

/**
 * Resourceful controller for interacting with tickets
 */
class TicketController {
  /**
   * Show a page of tickets.
   * GET tickets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const tickets = await Ticket.all()
    let arr_data = []
    let tanggal = []
    for(let i in tickets.rows) {
      tanggal[i] = new Date(tickets.rows[i].created_at)
      arr_data[i] = {
        id: tickets.rows[i].id,
        ticket_detail: tickets.rows[i].ticket_detail,
        customer_name: tickets.rows[i].customer_name,
        created_at: tanggal[i].getFullYear().toString() + '-' + (tanggal[i].getMonth()+1).toString() + '-' +(tanggal[i].getDate()-1).toString(),
        status: tickets.rows[i].status
      } 
    }
    return view.render('tickets.index', {tickets: arr_data})
  }

  /**
   * Render a form to be used for creating a new ticket.
   * GET tickets/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new ticket.
   * POST tickets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single ticket.
   * GET tickets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing ticket.
   * GET tickets/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update ticket details.
   * PUT or PATCH tickets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, session }) {
    const id = params.id
    const tickets = await Ticket.find(id)

    tickets.status = 1
    await tickets.save()

    session.flash({ notification: 'Data Berhasil Diupdate!' })
    return response.route('tickets.index')
  }

  /**
   * Delete a ticket with id.
   * DELETE tickets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TicketController
