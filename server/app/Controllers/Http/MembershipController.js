'use strict'

const Membership = use('App/Models/Membership')

class MembershipController {
    async index () {
        // get memberships list
        let memberships = await Membership.query().where('status', 'Active').fetch()
        
        // modify membership list
        return memberships.toJSON().map(m => {
            m.term_label = m.term === 7 ? 'per week' : 'per month'
            m.period_label = m.period === 7 ? 'for a week' : this.getPeriodLabel(m.period)
            return m
        })
    }

    getPeriodLabel(period) {
        const period_label = period === 30 ? 'a month' : (parseInt(period) / 30) + ' months'
        return `for ${period_label}`
    }
}

module.exports = MembershipController
