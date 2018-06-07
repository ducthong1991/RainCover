import {injectReducer} from '../../store/reducers';

export default (store) => ({
    path: '',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const homeView = require('./containers/HomeView').default
            const reducer = require('./modules/home').default
            injectReducer(store, {key: 'homeView', reducer})
            cb(null, homeView)

        }, 'homeView')
    }
})
