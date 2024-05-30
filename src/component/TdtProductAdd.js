import React, { Component } from 'react';

export default class TdtTaskAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tdt_taskId: '0',  // Changed from tdt_taskld to tdt_taskId
            tdt_taskName: '',
            tdt_level: ''
        };
    }

    tdtHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    tdtHandleSubmit = (ev) => {
        console.log("Form2", this.state);
        ev.preventDefault();
        this.props.onSummit(this.state);
    };

    render() {
        return (
            <div>
                <h2>Thêm mới lớp học</h2>
                <form className='col-md-6'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            tdt_taskId
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name='tdt_taskId'
                            value={this.state.tdt_taskId}
                            onChange={this.tdtHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="t">
                            tdt_taskName
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name='tdt_taskName'
                            value={this.state.tdt_taskName}
                            onChange={this.tdtHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="title">
                            tdt_level
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name='tdt_level'
                            value={this.state.tdt_level}
                            onChange={this.tdtHandleChange}
                        />
                    </div>
                    <button className='btn btn-success' onClick={this.tdtHandleSubmit}>
                        Ghi lại
                    </button>
                </form>
            </div>
        );
    }
}