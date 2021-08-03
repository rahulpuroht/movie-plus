import React, { Component } from 'react'

class MovieForm extends Component {
	constructor(props) {
		super(props);

    }
    componentDidMount(){
        console.log("sdfsdfdsf");
    }

    createMoviem = (e) => {
        console.log(this.getTitle.value)
        console.log(this.props.createMovie)
        this.props.createMovie(this.getTitle.value)
        window.history.back()

        // if (e.key === 'Enter' && !(this.getTitle.value === '')) {
        //     this.props.createMovie(this.getTitle.value)
        //     this.getTitle.value = '';
        // }
    }

    //  handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("sdf")
    //     this.createMovie(e)
    //     // dispatch(createMovie({ username: username }));
    //   };
    
    render() {
        return(
            <div>
                <div className="header">
                    <h1>Movie Form</h1>
                </div>
                <section>
                    <form onSubmit={this.createMoviem}>
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

export default MovieForm;