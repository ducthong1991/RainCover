
export default (store) => ({
    path: 'droplet-history',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const history = require('./components/DropletHistoryContainer').default
            cb(null, history)

        }, 'dropletHistory')
    }
})
