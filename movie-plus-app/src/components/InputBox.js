import React, { Component } from 'react'

class InputBox extends Component {
	constructor(props) {
		super(props);
    }

    createMovie = (e) => {
        // if (e.key === 'Enter' && !(this.getTitle.value === '')) {
            this.props.createMovie(this.getTitle.value)
            // this.getTitle.value = '';
        // }
    }
    
    render() {
        return(
            <div>
                <div className="header">
                    <h1>Movie List</h1>
                </div>
                {/* <div className="inputContainer">
                    <input className="taskInput" type="text" placeholder="Add a movie" maxLength="50"
                    onKeyPress={this.createMovie} ref={(input)=>this.getTitle = input} />
                </div>  */}
                <section>
                    <form onSubmit={this.createMovie}>
                        <div>
                            <input id="title" type="text" placeholder="Movie title" maxLength="50" required  
                             ref={(input)=>this.getTitle = input}/> <br />
                            {/* <input id="language" type="text" placeholder="Movie language" maxLength="50" required/> <br />
                            <input id="genre" type="text" placeholder="Movie genre" maxLength="50" required/> <br />
                            <input id="director" type="text" placeholder="Movie director" maxLength="50" required/> <br />
                            <input id="description" type="text" placeholder="Movie description" maxLength="50" required/> <br />
                            <input id="duration" type="number" placeholder="Movie duration" maxLength="50" required/> <br />
                            <input id="release_date" type="date" placeholder="Movie release_date" maxLength="50" required/> <br /> */}
                            <button className="primary">Save</button>
                        </div>
                    </form>
                    </section>   
            </div>            
        );
    }
}

export default InputBox;