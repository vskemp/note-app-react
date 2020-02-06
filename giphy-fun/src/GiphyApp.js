import React from 'react';
import axios from 'axios';

const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=BE3Bwvyy2WZsUBjJ49Krb9nO9cVGiTx6&q=laser&limit=25&offset=0&rating=G&lang=en';


class GiphyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            giphies: []
        };
    }
    render () {
        return (
            <div>
            Blap
            <button onClick={this._getGiphy}>Click Me</button>
            </div>

        );
    }

    _getGiphy = () => {
        axios.get(giphyUrl)
        .then(response => {
            console.log(response.data.data[0].images.downsized_large);
            this.setState({
                giphies: [
                    ...this.state.giphies,
                    response.data.data[0].images.downsized_large
                ]
            });
        })
        .catch(err => {
            console.log('No Giphy For You');
        })
        console.log('You clicked!')
    }

}

export default GiphyApp;