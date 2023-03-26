const { posts } = require('../constants/post')

const getProfile = async ( body ) => {
    try {
        console.log('Manager Call');
        let data = 'Profile Detail'
        return { data: posts } ;
    } catch ( error ) { console.log(error) }
}

module.exports = {
    getProfile,
}