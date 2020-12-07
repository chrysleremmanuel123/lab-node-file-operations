// const { userInfo } = require("os")


const userData = function (name, year, qualification) {
    userInfo = {
        name: name,
        Year: year,
        Qualification: qualification
    }
    return userInfo
}

module.exports = userData;