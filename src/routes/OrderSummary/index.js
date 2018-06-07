
export default (store) => ({
    path: 'order-summary',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const orderSummary = require('./containers/OrderSummaryContainer').default
            cb(null, orderSummary)

        }, 'orderSummary')
    }
})
