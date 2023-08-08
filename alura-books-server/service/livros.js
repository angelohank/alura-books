const fs = require("fs")

function getAll() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

module.exports = {
    getAll
}