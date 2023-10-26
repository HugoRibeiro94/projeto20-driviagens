import JoiBase from 'joi'
import JoiDate from "@joi/date"

const Joi = JoiBase.extend(JoiDate)

export const flightsSchema = Joi.object({
	origin: Joi.number().required(),
    destination: Joi.number().required(),
    date: Joi.date().required()                  ////Formatar////
})


