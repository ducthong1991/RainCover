
export default (store) => ({
    path: 'payment-detail',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const paymentDetail = require('./components/PaymentDetailComponent').default
            cb(null, paymentDetail)

        }, 'paymentDetail')
    }
})
