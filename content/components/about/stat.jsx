class Stat extends React.Component{
    render() {
        return (
            <div ref="Stat" className="Stat" style={{
            }}>
                <div className="name">
                    {this.props.name}
                </div>
                <div className="value">
                    {this.props.value} / 10
                </div>
            </div>
        );
    }
}

Stat.propTypes = {
    name: PropTypes.string.isRequired, // Name of this stat
    value: PropTypes.number.isRequired, // Value of this stat
};

export default Stat;