import React, { Component } from 'react';
import '../index.css';
import profileimg from '../images/man.png'
import { Row, Col, Icon } from 'antd';

const roundButton = {

    borderRadius: "50px",
    height: "50px",
    width: "50px",
    border: "none",
    outline: "none",
    margin: 2
}

class Drag_and_drop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: "1", taskName: "Read book", type: "inProgress" },
                { id: "2", taskName: "Pay bills", type: "inProgress"},
                { id: "3", taskName: "Go to the gym", type: "Done"},
                { id: "4", taskName: "Play baseball", type: "Done" },
                { id: "5", taskName: "learn reactnative", type: "inProgress" },
                { id: "6", taskName: "nodeJs", type: "inProgress"},
                { id: "7", taskName: "Ionic", type: "Done"},
                { id: "8", taskName: "learn Angular", type: "Done" }
            ]
        }

    }

    gotoHomeHandler = () => {
        this.props.history.push({ pathname: '/Home' })
    }

    onDragStart = (event, taskName) => {
        console.log('dragstart on div: ', taskName);
        event.dataTransfer.setData("taskName", taskName);
    }
    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        let taskName = event.dataTransfer.getData("taskName");

        let tasks = this.state.tasks.filter((task) => {
            if (task.taskName == taskName) {
                task.type = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }


    render() {
        var tasks = {
            inProgress: [],
            Done: []
        }

        this.state.tasks.forEach((task) => {
            tasks[task.type].push(
                <div key={task.id}
                    onDragStart={(event) => this.onDragStart(event, task.taskName)}
                    draggable
                    className="draggable"
                    style={{ backgroundColor: task.bgcolor }}>
                    {task.taskName}
                </div>
            );
        });

        return (


            <div className="drag-container">

                <Row>
                    <Col span={2}></Col>

                    <Col span={20}>

                        <div className="head">
                            <Row>
                                <Col span={1}></Col>
                                <Col span={2} onClick={this.gotoHomeHandler}><Icon type="close" /></Col>
                                <Col span={20}></Col>
                                <Col span={1}></Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col span={2}></Col>
                                <Col span={9}>

                                    <div className="inProgress"
                                        onDragOver={(event) => this.onDragOver(event)}
                                        onDrop={(event) => { this.onDrop(event, "inProgress") }}>
                                        <span className="group-header">In Progress</span><hr />
                                        {tasks.inProgress}
                                    </div>

                                </Col>
                                <Col span={2} style={{paddingTop:200}}>
                                    <button style={roundButton}><Icon type="caret-right" theme="filled" /></button>
                                    <button style={roundButton}><Icon type="caret-left" theme="filled" /></button>
                                </Col>

                                <Col span={9}>
                                    <div className="droppable"
                                        onDragOver={(event) => this.onDragOver(event)}
                                        onDrop={(event) => this.onDrop(event, "Done")}>
                                        <span className="group-header">Done</span><hr />
                                        {tasks.Done}
                                    </div>

                                </Col>
                                <Col span={2}></Col>
                            </Row>

                        </div>
                    </Col> <Col span={2}></Col>
                </Row>

            </div>
        )
    }
}
export default (Drag_and_drop);

