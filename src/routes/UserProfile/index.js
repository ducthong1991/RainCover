
export default (store) => ({
    path: 'user-profile',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const userProfile = require('./components/UserProfileContainer').default
            cb(null, userProfile)

        }, 'userProfile')
    }
})
