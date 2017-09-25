import { combineReducers } from 'redux';
import { actions } from './actions';

import Splash from '../components/splash/splash';
import SpaceShooter from '../components/games/SpaceShooter/game';

const component = (state = <Splash key="Splash" />, action) => {
    if(location.pathname.indexOf('testing') >= 0) {
        state = <SpaceShooter key="gw" />;
    }
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