import { combineReducers } from 'redux';
import { actions } from './actions';

import Splash from '../components/splash/splash';

const component = (state = <Splash key="Splash" />, action) => {
    switch (action.type) {
        case actions.CHANGE_COMPONENT:
            return action.component;
        
        default:
            return state;
    }
};

export default combineReducers({
    component
});