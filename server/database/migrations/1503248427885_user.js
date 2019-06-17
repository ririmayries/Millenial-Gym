'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('email').notNullable().unique()
      table.text('password').notNullable()
      table.string('phone_number').notNullable()
      table.integer('membership_id').index()
      table.date('membership_expired_date').index()
      table.enu('status', ['Active', 'Inactive'])
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
