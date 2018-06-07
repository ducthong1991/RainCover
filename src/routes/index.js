// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout';
import Home from './Home';
import dropletHistory from './DropletHistory';
import orderSummary from './OrderSummary';
import paymentDetail from './PaymentDetail';
import userProfile from './UserProfile';
import accountPassword from './AccountPassword';
import buyDroplet from './BuyDroplet';

export const createRoutes = (store) => ({
    path: '/',
    component: CoreLayout,
    indexRoute: Home(store),
    childRoutes: [
        dropletHistory(store),
        orderSummary(store),
        paymentDetail(store),
        userProfile(store),
        accountPassword(store),
        buyDroplet(store)
    ]
})

export default createRoutes;
