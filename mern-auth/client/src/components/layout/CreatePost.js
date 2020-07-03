/*
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import DropdownItem from 'react-bootstrap/Dropdown';
//import Dropdown from './Dropdown';
//import { connect } from "react-redux";
import axios from "axios";
import './CreatePost.css';


class createPost extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            country: "",
            //category: "",
            selectedFile: null,
            body: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newPost = {
            title: this.state.title,
            country: this.state.country,
            //category: this.state.category,
            body: this.state.body
        };


        axios.post("/api/posts", newPost).then(res => {
            if (res.status === 200) {
                this.props.history.push("/allPosts");
            }
        });

        /* upload file
        const data = new FormData();
        data.append('file', this.state.selectedFile)
        */
//data.append('post', newPost)

/*
axios.post('/api/posts', data)
    .then(result => { // then print response status

    });
*/

/*
fetch('/api/posts', {
    // content-type header should not be specified!
    method: 'POST',
    body: data,
})
    .then(response => response.json())
    .catch(error => console.log(error)
    );
*/

/* upload file
axios.post('/api/posts', data, {
    // receive two    parameter endpoint url ,form data
})
    .then(res => { // then print response status
        console.log(res.statusText);
    });
*/

//await axios.post(`${HOSTNAME}/reviews`, newPost);
//};


/*
fileSelectedHandler = event => {
    this.setState({
        selectedFile: event.target.files[0],
    })
};
*/
/*
    render() {
        return (
            <div className="container">
                <div style={{ marginTop: "2rem" }} className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/">
                            <i className="material-icons left">keyboard_backspace</i> Back to
                            home
                        </Link>
                        <div>
                            <h3>
                                <b>Tell us about your SEP experience!</b>
                            </h3>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div>
                                <p>Title of review:</p>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.title}
                                    id="title"
                                    type="text"
                                />
                            </div>
                            <div>
                                <p>Country of visit:</p>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.country}
                                    id="country"
                                    type="text"
                                />
                            </div>
                            <div>
                                <p>Tell us more:</p>
                                <textarea onChange={this.onChange} value={this.state.body}
                                    id="body" placeholder="Write your review here" />
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(createPost);
*/


// import React, { Component } from "react";

// export default class RadioButtons extends Component {
//   state = { selectedOption: "" };

//   handleOptionChange = e => {
//     if (e.target.checked && e.target.value === "my experience") { // if value of "No" option is selected
//       this.props.history.push("experiencePost"); // navigate to another route
//     } else {
//       this.props.history.push("placePost"); // navigate to another route
//     }
//     this.setState({ selectedOption: e.target.value });
//   };

//   render() {
//     const { selectedOption } = this.state;
//     const { history } = this.props;

//     return (
//       <div>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               checked={selectedOption === "my experience"}
//               onChange={this.handleOptionChange}
//             />
//             my experience
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value="a place"
//               checked={selectedOption === "a place"}
//               onChange={this.handleOptionChange}
//             />
//             a place
//           </label>
//         </div>
//         <div>
//            Selected option is : {this.state.selectedOption}
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import './CreatePost.css';


class createPost extends Component {
    constructor() {
        super();
        this.state = {
            name: "postType"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    // formSubmit(event) {
    //   event.preventDefault();
    //   console.log(this.state.selectedOption)
    //   // this.state.selectedOption === "my experience" ? 
    //   // // (<experiencePost/>) : null
    // }

    formSubmit = e => {
        e.preventDefault();
        console.log(this.state.selectedOption)
        if (this.state.selectedOption === "my experience") { // if value of "No" option is selected
            this.props.history.push("experiencePost"); // navigate to another route
        } else {
            this.props.history.push("placePost"); // navigate to another route
        }
    }



    render() {
        return (
            //     <div className="Title">
            //       <p>I want to share about...</p>

            //     <ul className="select">
            //     <li><a href="/experiencePost">my experience</a></li>
            //     <li><a href="/placePost">a place</a></li>
            // </ul></div>
            <form onSubmit={this.formSubmit}>
                <div class="container">
                    <p>I want to share about</p>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="my experience"
                                checked={this.state.selectedOption === "my experience"}
                                onChange={this.onValueChange}
                            />
              my experience
            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="a place"
                                checked={this.state.selectedOption === "a place"}
                                onChange={this.onValueChange}
                            />
              a place
            </label>
                    </div>
                    <div>
                        Selected option is : {this.state.selectedOption}
                    </div>
                    <button className="btn btn-default" type="submit">
                        Next
          </button>
                </div>
            </form>
        );
    }
}

export default withRouter(createPost);