import loadingImage from '../images/loading';

class Loading extends React.Component{
    render() {
        return (
            <div className="Loading">
                <img src={loadingImage} />
            </div>
        );
    }
}

export default Loading;