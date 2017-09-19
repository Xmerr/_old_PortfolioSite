import GuessThatNumber from './GuessThatNumber/game';
import GuessThatNumberPreview from './GuessThatNumber/preview.mp4';

import Hangman from './Hangman/game';
import HangmanPreview from './Hangman/preview.mp4';

import Breakout from './Breakout/game';
import BreakoutPreview from './Breakout/preview.mp4';

export default [
    {
        className: "gtn",
        name: "Guess That Number",
        Component: props => <GuessThatNumber {...props} />,
        Preview: GuessThatNumberPreview
    },
    {
        className: "hm",
        name: "Hangman",
        Component: props => <Hangman {...props} />,
        Preview: HangmanPreview
    },
    {
        className: "bo",
        name: "Breakout",
        Component: props => <Breakout {...props} />,
        Preview: BreakoutPreview
    }
];