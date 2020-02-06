import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';

const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=BE3Bwvyy2WZsUBjJ49Krb9nO9cVGiTx6&tag=cats&rating=G';


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
            <button onClick={this._getGiphy}>Click Me</button>
            {
                this.state.giphies.map(giphy => (
                    <GiphyImage giphy={giphy} />
                ))
            }
            </div>

        );
    }

    _getGiphy = () => {
        axios.get(giphyUrl)
        .then(response => {
            console.log(response.data.data.images.downsized_large);
            this.setState({
                giphies: [
                    response.data.data.images.downsized_large,
                    ...this.state.giphies,
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