import { combineReducers } from 'redux';
import { actions } from './actions';

import Splash from '../components/splash/splash';
import Hangman from '../components/games/Hangman/game';

const component = (state = <Splash key="Splash" />, action) => {
    if(location.pathname.indexOf('testing') >= 0) {
        state = <Hangman key="hm" />;
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