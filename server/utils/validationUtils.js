exports.isValidObjectId = (id) => {
    return /^[0-9a-fA-F]{24}$/.test(id); // Verifica se é um ObjectId válido
};
