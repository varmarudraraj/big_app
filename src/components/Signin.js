import React, { Component } from 'react';
import '../index.css';
import profile from '../images/man.png'
import { Input, Icon, } from 'antd';

import { Card } from 'antd';
const { Meta } = Card;

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }

    }

    textFielseHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    largeButtonHandeling = () => {

        if (this.state.userName !== "") {

            if (this.state.password !== "") {

                this.props.history.push({ pathname: "/Home" });
            }
            else { alert("please enter password") }
        }
        else { alert("please enter user id") }

    }


    render() {

        return (

            <div className="mainDiv">
                <Card
                    hoverable
                    className="cardStyles"
                    cover={
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <div style={{ height: 80 }}></div>
                            <img alt="example" src={profile} width="80%" />
                            <div style={{ height: 20 }}></div>

                        </div>
                    }
                >
                    <div style={{ margin: 10 }}>
                        <Input
                            name="userName"
                            style={{ fontSize: 18 }}
                            value={this.state.userName}
                            onChange={this.textFielseHandler}
                            placeholder="Enter your username"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                    </div>

                    <div style={{ margin: 10 }}>
                        <Input
                            name="password"
                            style={{ fontSize: 18 }}
                            value={this.state.password}
                            onChange={this.textFielseHandler}
                            type="password"
                            placeholder="Password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                    </div>
                    <div>
                        <button onClick={this.largeButtonHandeling} 
                        style={{ backgroundColor: "#71a2f6", width: "90%", marginLeft: 15, borderRadius: "20px", height: "35px", color: "#ffffff", border: "none", outline: "none" }}>Signin</button>
                    </div>

                </Card>,


            </div>

        )

    }
}

export default (Signin);

