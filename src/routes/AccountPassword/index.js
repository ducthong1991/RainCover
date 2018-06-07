
export default (store) => ({
    path: 'account-password',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const accountPassword = require('./components/AccountPasswordComponent').default
            cb(null, accountPassword)

        }, 'accountPassword')
    }
})
