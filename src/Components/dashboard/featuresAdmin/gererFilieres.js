import React, { Component } from "react";
import axios from "axios";
import Logo from "../../../assets/img/logo_este_work.png";
import {Link} from 'react-router-dom';
import { Button, Image, Table, Input } from "semantic-ui-react";

class Filiere extends Component {
  state = {
    filiere: this.props.o,
    label: this.props.o.label,
    abrv: this.props.o.abrv,
    Update: 0
  };

  onDelete = () => {
    //e.preventDefault();
    //alert(this.state.filiere._id);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ id: this.state.filiere._id });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:5000/api/filieres/delete", requestOptions)
      .then(response => response.text())
      .then(result => {
        window.location.assign("http://localhost:3000/dashAdmin/Filieres");
        console.log(result);
        })
       .catch(error => {
        console.log(error);
      });
     
  };

  onUpdate = () => {
    //e.preventDefault();

    axios
      .put("http://localhost:5000/api/filieres/update", {
        id: this.state.filiere._id,
        label: this.state.label,
        abrv: this.state.abrv
      })
      .then(res => this.setState({ Update: 0 }))
      .catch(error => {
        console.log(error);
      });
    //window.location.assign("http://localhost:3000/dashAdmin/Filieres");
  };
  render() {
    return (
      <>
        {!this.state.Update ? (
          <Table.Row>
            <Table.Cell collapsing>
              <Button onClick={this.onDelete}>Delete filiere</Button>
              <Button onClick={() => this.setState({ Update: 1 })}>
                Update filiere name or Abbreviation
              </Button>
              <Button><Link to ={"/dashAdmin/Students/"+this.state.filiere._id}>Gere etudients</Link></Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <i className="circle icon" /> {this.state.abrv}
            </Table.Cell>
            <Table.Cell>
              {" - "} {this.state.label}
            </Table.Cell>
          </Table.Row>
        ) : (
          <Table.Row>
            <Table.Cell collapsing>
              <Input
                placeholder="Abbreviation"
                onChange={e => this.setState({ abrv: e.target.value })}
              />
              {" - "}
              <Input
                placeholder="filiere name"
                onChange={e => this.setState({ label: e.target.value })}
              />
              {" - "}
              <Button onClick={this.onUpdate}>Accepte</Button>
              <Button onClick={() => this.setState({ Update: 0 })}>
                Cancel
              </Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <i className="circle icon" /> {this.state.filiere.abrv}
            </Table.Cell>
            <Table.Cell>
              {" - "} {this.state.filiere.label}
            </Table.Cell>
          </Table.Row>
        )}
      </>
    );
  }
}

class GererFilieres extends React.Component {
  state = {
    filieres: [],
    label: "",
    abrv: ""
  };
  onAdd = () => {
    //e.preventDefault();
    axios
      .post("http://localhost:5000/api/filieres/add", {
        label: this.state.label,
        abrv: this.state.abrv
      })
      .then(res => {
        this.setState({
          filieres: [
            ...this.state.filieres,
            {
              label: this.state.label,
              abrv: this.state.abrv
            }
          ]
        });
      })
      .then(() => {
        this.setState({
          label: "",
          abrv: ""
        });
      })
      .catch(error => {
        //alert(error);
        console.log(error);
      });
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/api/filieres")
      .then(response => {
        this.setState({ filieres: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <>
      
      <div style={{ textAlign: "center", height: "vh" }}>
        <div
          className="ui segment"
          style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}
        >
          <div>
            {" "}
            <Image src={Logo} size="small" />
          </div>
          <Table compact celled definition>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Abbreviation</Table.HeaderCell>
                <Table.HeaderCell>Name filiere</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this.state.filieres.length ? (
              <Table.Body>
                {this.state.filieres.map(o => (
                  <Filiere o={o} key={o._id} />
                ))}
              </Table.Body>
            ) : (
              <h2 style={{ textAlign: "center" ,color:"darkblue"}}>Vous n'avez pas encore créer une filière</h2>
            )}
            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell colSpan="4">
                  <Input
                    value={this.state.abrv}
                    placeholder="Abbreviation..."
                    onChange={e => this.setState({ abrv: e.target.value })}
                  />{" "}
                  {" - "}
                  <Input
                    value={this.state.label}
                    placeholder="Name filiere..."
                    onChange={e => this.setState({ label: e.target.value })}
                  />{" "}
                  {" - "}
                  <Button size="small" onClick={this.onAdd} style={{marginTop:"5px"}}>
                    Approve
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </div>
      <center style={{marginTop:"15px"}}>
                <Link to="/dashAdmin" class="ui left labeled icon button">
                    <i class="left arrow icon"></i>
                    To Dahsboard
                </Link>
        </center>
      </>
    );
  }
}

export default GererFilieres;
