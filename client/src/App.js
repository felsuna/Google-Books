import React, { Component } from 'react';
// import './App.css';
import Jumbotron from './components/Jumbotron';
import { Col, Row, Container } from './components/Grid';
import { List, ListItem } from './components/List';


class App extends Component {

    state = {
        searchTerm: 'Donut',
        data: []
    }

    search = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`)
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                this.setState({
                    data: data.items
                })
            })
    };

    searchTerm = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    };

    render() {

        var displayBookData = this.state.data.map((each, index) =>
            <div key={index}>
                <List>
                    <ListItem>
                        <h2>{each.volumeInfo.title}</h2>
                        <p>Written By: {each.volumeInfo.authors}</p>
                        <p>{each.volumeInfo.description}</p>
                        <p>
                            <a>Preview Link: {each.volumeInfo.previewLink}</a>
                        </p>
                        <p>
                        <a>Image: {each.volumeInfo.imageLinks.smallThumbnail}</a>
                        </p>
                    </ListItem>
                </List>
            </div>
        )
        return (
            <div className="App">
                <Jumbotron>
                    <h1>Google Books</h1>
                </Jumbotron>
                <Row>
                    <Container>
                        <h1>Search</h1>
                        <input onChange={this.searchTerm} type="text" placeholder="search term" />
                        <button onClick={this.search}>Search</button>
                    </Container></Row>

                <Container>
                    <h2>Results:</h2>
                    <strong>{displayBookData}</strong>
                </Container>
            </div>
        );
    };
}

export default App;