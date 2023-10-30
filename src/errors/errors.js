function conflict() {
    return {
        type: "conflict",
        message:"Cidade já cadastrada"
    }
}

function conflictCities() {
    return {
        type: "conflictCities",
        message:"Origem e destino iguais"
    }
}

function notFound(item) {
    return {
        type: "notFound",
        message: `${item} não foi encontrado!`
    }
}

function incompleteDataError() {
    return { 
        type: "incompleteData", 
        message: "Dados imcompletos"
    }
}

export const errors = {conflict , notFound , incompleteDataError , conflictCities}