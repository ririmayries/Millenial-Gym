'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MembershipsSchema extends Schema {
  up () {
    this.create('memberships', (table) => {
      table.increments()
      table.string('order_number', 255).notNullable()
      table.integer('price').notNullable()
      table.integer('class_per_term').notNullable()
      table.integer('term').notNullable()
      table.integer('period').notNullable()
      table.enu('status', ['Active', 'Inactive']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('memberships')
  }
}

module.exports = MembershipsSchema
