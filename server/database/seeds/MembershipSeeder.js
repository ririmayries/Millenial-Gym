'use strict'

/*
|--------------------------------------------------------------------------
| MembershipSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Database = use('Database')

class MembershipSeeder {
  async run () {
    await Database
      .from('memberships')
      .insert([{
        title: 'Novice',
        price: 229000,
        class_per_term: 2,
        term: 7,
        period: 7,
        status: 'Active'
      }, {
        title: 'Intermediate',
        price: 589000,
        class_per_term: 6,
        term: 30,
        period: 30,
        status: 'Active'
      }, {
        title: 'Expert',
        price: 2589000,
        class_per_term: 10,
        term: 30,
        period: 90,
        status: 'Active'
      }])
  }
}

module.exports = MembershipSeeder
