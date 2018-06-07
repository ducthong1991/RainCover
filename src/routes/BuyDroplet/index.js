
export default (store) => ({
    path: 'buy-droplet',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const buyDroplet = require('./components/BuyDropletContainer').default
            cb(null, buyDroplet)

        }, 'buyDroplet')
    }
})
