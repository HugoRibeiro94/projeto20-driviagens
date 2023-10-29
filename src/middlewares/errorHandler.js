import httpStatus from "http-status"

export async function errorHandler(error, req, res, next) {
    console.log(error)

    if (error.type === 'conflict') {
        return res.status(httpStatus.CONFLICT).send(error.message)
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Ocorreu um erro desconhecido!")

}