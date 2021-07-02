//van a venir aca todas las direcciones (about, index, )
const path = require('path');

module.exports = {
    index:(req,resp)=> resp.sendFile(path.resolve(__dirname, "../views","home.html"))
}