import Joi from 'joi'

export const passengerSchema = Joi.object({
	firstName: Joi.string().trim().min(2).max(100).required(),
	lastName: Joi.string().trim().min(2).max(100).required()
})