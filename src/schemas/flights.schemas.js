import Joi from 'joi'
import JoiDate from "@joi/date"

const extendedJoi = Joi.extend(JoiDate)

const dateSchema = extendedJoi.date().format(["DD-MM-YYYY"]);

export const flightsSchema = Joi.object({
	origin: Joi.number().required(),
    destination: Joi.number().required(),
    date: dateSchema                ////Formatar////
})


