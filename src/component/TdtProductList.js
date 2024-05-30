import React, { Component } from 'react';

export default class tdtListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingIndex: null,
      newTask: {
        tdt_taskId: '',
        tdt_taskName: '',
        tdt_level: ''
      }
    };
  }

  handleEdit = (index) => {
    this.setState({
      editingIndex: index,
      newTask: { ...this.props.renderProducts[index] }
    });
  };

  handleSave = () => {
    const { renderProducts, onUpdate } = this.props;
    const { editingIndex, newTask } = this.state;


    if (!newTask.tdt_taskId || !newTask.tdt_taskName || !newTask.tdt_level) {
      alert('Please fill in all the fields.');
      return;
    }

    const updatedProducts = [...renderProducts];
    updatedProducts[editingIndex] = { ...newTask };

    this.setState({
      editingIndex: null,
      newTask: { tdt_taskId: '', tdt_taskName: '', tdt_level: '' }
    });


    if (typeof onUpdate === 'function') {
      onUpdate(updatedProducts);
    }
  };

  handleCancel = () => {
    this.setState({
      editingIndex: null,
      newTask: { tdt_taskId: '', tdt_taskName: '', tdt_level: '' }
    });
  };

  handleDelete = (index) => {
    const { renderProducts, onUpdate } = this.props;
    const updatedProducts = renderProducts.filter((_, i) => i !== index);


    if (typeof onUpdate === 'function') {
      onUpdate(updatedProducts);
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      newTask: { ...this.state.newTask, [name]: value }
    });
  };

  render() {
    const { renderProducts } = this.props;
    const { editingIndex, newTask } = this.state;

    const elementProduct = renderProducts.map((item, index) => (
      index === editingIndex ? (
        <tr key={index}>
          <td>
            <input
              type="text"
              name="tdt_taskId"
              value={newTask.tdt_taskId}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="tdt_taskName"
              value={newTask.tdt_taskName}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="tdt_level"
              value={newTask.tdt_level}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <button onClick={this.handleSave} className="btn btn-success">Save</button>
            <button onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </td>
        </tr>
      ) : (
        <tr key={index}>
          <td>{item.tdt_taskId}</td>
          <td>{item.tdt_taskName}</td>
          <td>{item.tdt_level}</td>
          <td>
            <button onClick={() => this.handleEdit(index)} className="btn btn-primary">Edit</button>
            <button onClick={() => this.handleDelete(index)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
      )
    ));

    return (
      <div>
        <h2>Danh sách lớp học</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>tdt_taskId</th>
              <th>tdt_taskName</th>
              <th>tdt_level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>
      </div>
    );
  }
}