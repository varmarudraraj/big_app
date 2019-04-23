import React, { Component } from 'react';
import '../index.css';
import { Pagination } from 'antd';
import { Row, Col, } from 'antd';
import { Input } from 'antd';
import axios from 'axios';
import { Select } from 'antd';
import sortBy from 'lodash/sortBy';


const Search = Input.Search;
const Option = Select.Option;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 4,// as i am displaying 5 items per page
            currentPage: 1,
            data: [],
            pageData: []

        }
    }
    componentWillMount() {

        let self = this;
        axios({
            method: 'get',
            url: "https://jsonplaceholder.typicode.com/users"

        })
            .then(function (response) {


                self.setState({ data: response.data, pageData: response.data })

                var sliced = self.state.pageData.slice(0, 5);

                self.setState({ pageData: sliced })

            })

    }

    handelSignOut = () => {

        this.props.history.push({ pathname: "/" });

    }

    searchHandler = (search) => {
        const result = this.state.pageData.filter(item => item.username.toUpperCase() === search.toUpperCase());
        this.setState({ pageData: result })

    }

    handleChange = () => {

        let sorted = sortBy(this.state.pageData, 'name')

        this.setState({ pageData: sorted })

    }

    paginationHandler = (e) => {

        var Array = this.state.data;

        if (this.state.currentPage < e) {

            let data = Array.slice(this.state.count, this.state.count + 5);

            this.setState({ currentPage: e, count: this.state.count + 5, pageData: data })

        }
        else {
            let data = Array.slice(this.state.count - 9, 5);

            this.setState({ currentPage: e, count: this.state.count - 5, pageData: data })
        }
    }
    handelDrag=()=>{

        this.props.history.push({ pathname: "/Drag" });

    }

    render() {
        return (
            <div>



                <Row style={{ marginTop: 50, marginBottom: 15, textAlign: "center" }}>
                    

                    <Col span={2} style={{textAlign:"right"}}>
                        <button onClick={this.handelSignOut}
                            style={{ backgroundColor: "#71a2f6", width: "60px", marginLeft: 15, borderRadius: "20px", height: "25px", color: "#ffffff", border: "none", outline: "none" }}>SignOut</button>
                    </Col>
                    <Col span={4} style={{textAlign:"left"}}>
                    <button onClick={this.handelDrag}
                            style={{ backgroundColor: "#29a25a", width: "60px", marginLeft: 15, borderRadius: "20px", height: "25px", color: "#ffffff", border: "none", outline: "none" }}>Drag</button>
                   
                    </Col>
                    <Col span={8}></Col>

                    <Col span={4}>
                        <Select defaultValue="Sort by" style={{ width: 120}}
                            onChange={this.handleChange}>
                            <Option value="sort">Sort by name</Option>
                        </Select>
                    </Col>

                    <Col span={4}>
                        <Search
                            placeholder="user name"
                            onSearch={value => this.searchHandler(value)}
                            style={{ width: 200 }}
                        /></Col>
                    <Col span={2}></Col>
                </Row>

                <Row style={{ marginTop: 50, marginBottom: 15, fontWeight: "bold", textAlign: "left" }}>
                    <Col span={1}></Col>
                    <Col span={10}><span>FULL NAME</span></Col>
                    <Col span={4}><span>PHONE</span></Col>
                    <Col span={4}><span>USER NAME</span></Col>
                    <Col span={5}><span>COMPANY NAME</span></Col>
                </Row>
                <hr />

                {this.state.pageData.map((item) =>

                    <div>
                        <Row style={{ marginTop: 50, marginBottom: 15, textAlign: "left" }}>
                            <Col span={1} ></Col>
                            <Col span={10}><span style={{ color: "blue" }}>{item.name}</span>
                                <br /><span>{item.email}</span>
                            </Col>
                            <Col span={4}><span>{item.phone}</span></Col>
                            <Col span={4}><span>{item.username}</span></Col>
                            <Col span={5}><span>{item.company.name}</span></Col>
                        </Row>

                        <hr />

                    </div>
                )}



                <Row style={{ marginTop: 50, marginBottom: 15, textAlign: "center" }}>
                    <Col span={16}></Col>
                    <Col span={4}>

                    </Col>
                    <Col span={4}></Col>
                </Row>


                <Row style={{ marginTop: 15, marginBottom: 15, textAlign: "center" }}>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Pagination
                            onChange={this.paginationHandler}
                            current={this.state.currentPage}
                            defaultPageSize={5}
                            defaultCurrent={1}
                            total={this.state.data.length} /></Col>
                    <Col span={4}></Col>
                </Row>



            </div>

        )

    }
}

export default (Home);  