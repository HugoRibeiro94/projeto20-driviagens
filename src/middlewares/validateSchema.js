import { errors } from "../errors/errors.js";

export function validateSchema(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const err = validation.error.details.map(detail => detail.message)
            throw errors.incompleteDataError(err)
        }

        next()
    }
}