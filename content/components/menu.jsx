import React from 'react';

class Menu extends React.Component{
    render() {
        return (
            <div className="Menu">
                {(()=>{
                    var list = [];
                    for(var i in this.props.areas) {
                        var scrollFunc = ((area) => {
                            return () => this.props.scroll(area);
                        })(this.props.areas[i].main);
                        
                        list.push(
                            <div key={i}>
                                <span onClick={scrollFunc}>
                                    {i}
                                </span>
                                
                                <div>
                                    {(()=>{
                                        var smallList = [];
                                        for(var j in this.props.areas[i]){
                                            if(j === "main") {
                                                continue;
                                            }
                                            
                                            var scrollFunc2 = ((area) => {
                                                return () => this.props.scroll(area);
                                            })(this.props.areas[i][j]);
                                            
                                            smallList.push(
                                                <span key={j} onClick={scrollFunc2}>
                                                    {j}
                                                </span>
                                            );
                                        }
                                        return smallList;
                                    })()}
                                </div>
                            </div>
                        );
                    }
                    
                    return list;
                })()}
            </div>
        );
    }
}

export default Menu;