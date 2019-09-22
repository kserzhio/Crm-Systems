module.exports.login = function (req,res) {
    res.status(200).json({
        login: 'From Controller'
    })
}

module.exports.register = function (req,res) {
    res.status(200).json({
        register: 'From Controller'
    })
}
