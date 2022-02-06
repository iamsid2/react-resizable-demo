import { Component } from "react";
import { Resizable } from "re-resizable"; //open source library for resizing components
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

//Style object
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

class Window1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Component 1",
      show_m1: false,
      show_m2: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleShow(e) {
    if (e.target.id === "add") {
      console.log("Inside ADD");
      this.setState({ name: "", show_m1: true });
    }
    if (e.target.id === "edit") {
      console.log("Inside Edit");
      this.setState({ show_m2: true });
    }
  }

  handleClose(e) {
    alert("Are you sure you want to close?");
    axios.get(`api/data/allData`).then((res) => {
      const data = res.data;
      this.setState({
        id: data[data.length - 1]._id,
        name: data[data.length - 1].name,
        show_m1: false,
        show_m2: false,
      });
      console.log(this.state);
    });
  }

  handleAdd(e) {
    const obj = { name: this.state.name };
    axios
      .post(`/api/data/add`, obj)
      .then(() => console.log("Added"))
      .catch((err) => console.log(err));
  }

  handleEdit(e) {
    this.setState({ show_m2: false });
    const obj = { id: this.state.id, name: this.state.name };
    axios
      .post(`/api/data/edit`, obj)
      .then(() => console.log("Edited"))
      .catch((err) => console.log(err));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    axios.get(`api/data/alldata`).then((res) => {
      const data = res.data;
      console.log("CDM", data);
      this.setState({
        name: data[data.length - 1].name,
        id: data[data.length - 1]._id,
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      <Resizable
        style={style}
        defaultSize={{
          width: 300,
          height: 300,
        }}
      >
        <div>
          <h4> {this.state.name}</h4>
          <Button variant="success" id="add" onClick={this.handleShow}>
            ADD
          </Button>

          <Modal show={this.state.show_m1} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleAdd}>
                ADD
              </Button>
            </Modal.Footer>
          </Modal>
          {"   "}
          <Button variant="primary" id="edit" onClick={this.handleShow}>
            EDIT
          </Button>

          <Modal show={this.state.show_m2} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleEdit}>
                EDIT
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Resizable>
    );
  }
}

export default Window1;
