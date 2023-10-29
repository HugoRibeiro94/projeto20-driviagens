function conflict() {
    return {
        type: "conflict",
        message:"Cidade já cadastrada"
    }
}

export const errors = {conflict}