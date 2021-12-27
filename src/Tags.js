import { Component } from 'react';

class Tags extends Component{
    constructor(props){
        super(props);
        this.state = {tags : props.tags};
    }

    render(){
        return (
            <div className="tags">
                {[this.state.tags.map((tag, i) => 
                    <p key={i} className="tag">#{tag} </p>)
                ]}
            </div>
        )
    }
}

export default Tags;