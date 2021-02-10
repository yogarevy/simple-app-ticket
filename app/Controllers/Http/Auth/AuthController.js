'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with auths
 */
class AuthController {
  /**
   * Show a list of all auths.
   * GET auths
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return view.render('auth.login')
  }

  /**
   * Login auth.
   * POST auths
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // @ts-ignore
  async login({ request, auth, response, session }) {
    try {
      //getting data passed within the request
      const data = request.only(["email", "password"])

      const rules = {
        email: 'required|email',
        password: 'required'
      }
      const validation = await validate(data, rules)

      if (validation.fails()) {
        session.withErrors(validation.messages()).flashAll()
        return response.redirect('back')
      }

      if (
        await auth.attempt(data.email, data.password)
      ) {
        let user = await User.findBy("email", data.email)
        session.put({
          user_id: user.id,
          user_name: user.name,
          user_email: user.email,
        })

        return response.route('dashboard.index')
      }
    } catch (error) {
      session.withErrors({failed: error.message}).flashAll()
      return response.redirect('back')
    }
  }

  /**
   * Logout auth.
   * POST auths
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // @ts-ignore
  async logout({ auth, response, session }) {
    session.clear()
    await auth.logout()
    return response.route('form-login')
  }

  /**
   * Render a form to be used for creating a new auth.
   * GET auths/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new auth.
   * POST auths
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single auth.
   * GET auths/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing auth.
   * GET auths/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update auth details.
   * PUT or PATCH auths/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a auth with id.
   * DELETE auths/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AuthController
