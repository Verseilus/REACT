import WeatherRecord from './WeatherRecord'
import React, { Component } from 'react'
import { Form, Container, Button, Table } from 'react-bootstrap'

export default class WeatherApp extends Component {
    constructor(props){
      super(props)
      this.state = {
        tags: [],
        list: []
      }
      this.buttonRef = React.createRef()
    }

    render() {
        const {tags} = this.state
        const handleClick = event => {
            this.setState({
                list: tags
            })
        }
        const createTag = event => {
            if (event.key === "Enter") {
                event.preventDefault();
                if (event.target.value !== "") {
                    if (tags.length < 6) {
                        this.setState({
                            tags: [...tags, event.target.value]
                        })
                    }
                    event.target.value = ""
                }
            }
        }
        const deleteTag = i => {
            this.setState({
                tags: tags.filter((_, index) => index !== i)
            })
        }
        return (
            <>
                <Container>
                    <Form>
                        <Form.Group className="mt-3 mb-3">
                            <Form.Label>What is the weather like in ...?</Form.Label>
                            <div className="custom-container">
                                <div className="custom-tag-container">
                                    {this.state.tags.map((tagName, index) => (
                                        <div key={index} className="custom-tag">
                                            <span>{tagName}</span>
                                            <i className="material-icons" onClick={() => deleteTag(index)}>close</i>
                                        </div>
                                    ))}
                                    <input placeholder="Enter location" onKeyDown={createTag}/>
                                </div>
                            </div>
                            <Form.Text className="text-muted">
                                You can search for multiple locations by pressing enter after inputting each one.
                            </Form.Text>
                        </Form.Group>
                        <Button className="mb-3" variant="primary" onClick={handleClick} ref={this.buttonRef}>
                            Search
                        </Button>
                    </Form>
                    <Table>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Weather</th>
                                <th>Temperature</th>
                                <th>Humidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.list.map((city, index) => (
                                <WeatherRecord city={city} key={index}></WeatherRecord>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </>
        )
    }
}