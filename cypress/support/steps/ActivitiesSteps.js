/* global Given, Then, When */
/// <reference types="cypress" />

import activitySchema from '../../contracts/activity.contract'
import activitiesSchema from '../../contracts/activities.contract'

let response

When(/^User search for all activities$/, () => {
	cy.getActivitiesApi().then(($res) => {
		response = $res
	})
});

When(/^User search for activity with id (.*)$/, (id) => {
	cy.getActivityApi(id).then(($res) => {
		response = $res
	})
});

When(/^User create activity with id (.*), title (.*), dueDate (.*) and completed (.*)$/, (id, title, dueDate, completed) => {
	cy.postActivityApi(parseInt(id), title, dueDate, JSON.parse(completed)).then(($res) => {
		response = $res
	})
});

When(/^User edit activity with id (.*), title (.*), dueDate (.*) and completed (.*)$/, (id, title, dueDate, completed) => {
	cy.putActivityApi(parseInt(id), title, dueDate, JSON.parse(completed)).then(($res) => {
		response = $res
	})
});

When(/^User delete activity with id (.*)$/, (id) => {
	cy.deleteActivityApi(id).then(($res) => {
		response = $res
	})
});

Then(/^User should receive status code (.*)$/, (statusCode) => {
	expect(response.status).to.eq(parseInt(statusCode))
});

Then(/^User should receive response body equal to the activities contract$/, () => {
	return activitiesSchema.validateAsync(response.body)
});

Then(/^User should receive activity with id (.*) on response body$/, (id) => {
	expect(response.body.id).to.eq(parseInt(id))
});

Then(/^User should receive response body equal to the activity contract$/, () => {
	return activitySchema.validateAsync(response.body)
});

Then(/^User should receive the activity on response body with id (.*), title (.*), dueDate (.*) and completed (.*)$/, (id, title, dueDate, completed) => {
	expect(response.body.id).to.eq(parseInt(id))
	expect(response.body.title).to.eq(title)
	expect(response.body.dueDate).to.eq(dueDate)
	expect(response.body.completed).to.eq(JSON.parse(completed))
});
