import Breakout from './Breakout/breakout';
import BreakoutPreview from './Breakout/preview.mp4';

export default [
    {
        name: "Breakout",
        Component: props => <Breakout {...props} />,
        Preview: BreakoutPreview
    }
];