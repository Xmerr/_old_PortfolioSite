import list from './projects';
require('./work.scss');

class Work extends React.Component {
    render() {
        return (
            <div className='Work'>
                {
                    list.map(proj => {
                        return (
                            <div key={proj.title}>
                                <div>
                                    <img src={`${proj.link}/public/preview.PNG`} />
                                </div>
                                <div>
                                    <h1>
                                        {proj.title}
                                    </h1>
                                    <h4>
                                        {proj.type}
                                    </h4>
                                </div>
                                <div>
                                    {proj.description}
                                </div>
                                <div className="buttons">
                                    <a href={proj.link} target="_blank">
                                        visit
                                    </a>
                                    <a href={proj.repo} target="_blank">
                                        github
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
};

Work.propTypes={
};

export default Work;