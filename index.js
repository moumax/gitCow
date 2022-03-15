const user = require('./information')
const cowsay = require ('cowsay');

console.log(cowsay.say({
    text : user.wilder.name + " de la " + user.wilder.campus,
    e : "oO",
    T : "U "
}));
