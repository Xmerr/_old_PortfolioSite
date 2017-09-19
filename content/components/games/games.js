import Breakout from './Breakout/game';
import BreakoutPreview from './Breakout/preview.mp4';

import GuessThatNumber from './GuessThatNumber/game';
import GuessThatNumberPreview from './GuessThatNumber/preview.mp4';

export default [
    {
        className: "gtn",
        name: "Guess That Number",
        Component: props => <GuessThatNumber {...props} />,
        Preview: GuessThatNumberPreview
    },
    {
        className: "bo",
        name: "Breakout",
        Component: props => <Breakout {...props} />,
        Preview: BreakoutPreview
    }
];