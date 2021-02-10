'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

//Authentication
Route.group(() => {
  Route.get('auth/login', 'AuthController.index').as('form-login')
  Route.post('auth/login', 'AuthController.login').as('post-login')
  Route.post('auth/logout', 'AuthController.logout').as('post-logout')
}).namespace('Auth')

//Dashboard
Route.group(() => {
  Route.get('dashboard', 'Web/DashboardController.index').as('dashboard.index')
}).middleware(['hasAuth'])

//Users
Route.group(() => {
  Route.get('users', 'Web/UserController.index').as('users.index')
}).middleware(['hasAuth'])

//Tickets
Route.group(() => {
  Route.get('tickets', 'Web/TicketController.index').as('tickets.index')
  Route.post('tickets-update/:id', 'Web/TicketController.update').as('tickets.update')
}).middleware(['hasAuth'])
