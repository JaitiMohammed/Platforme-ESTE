import React from 'react';
import Axios from 'axios';
import { Table ,Input,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
class filiereAffecter extends React.Component {
    // list des etudiants par leurs filières 
    constructor() {
        super();

        this.state = {
            //nomStudent: "",
            nomP: "",
            idprofs: "",
            filiere_id:"",
            filieres:[]
            //professors: []
        }
    }
    loadProfsDetails = () => {
        Axios.get('//localhost:5000/api/professors/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    idprofs:res.data._id,
                    nomP: res.data.fullname
                })
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            }
            )
    }
   componentDidMount() {
        //console.log(this.props.match.params.id)
        this.loadProfsDetails();
        this.loadFilieres();
    }

    /*
    onChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };
      onAdd = (e) => {
        e.preventDefault();
        Axios
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
    */
      loadFilieres =() => {
        Axios.get('http://localhost:5000/api/filieres')
           .then(res => {
             this.setState({filieres:res.data})
             console.log(res.data)
           })
           .catch(err => {
             console.log(err)
           });
      }


    render() {
        let options = this.state.filieres.map(data => 
            <option value={data._id} >{data.abrv}</option>
          );
        return (
            <>
            <div className="ui segment"  style={{marginTop:"50px", textAlign: "center", height: "vh", marginLeft:"150px" ,marginRight:"150px"}}>
            <Table definition>
            <Table.Header>
                <Table.HeaderCell />
                <Table.HeaderCell>FullName</Table.HeaderCell>
                <Table.HeaderCell>Filière enseigné</Table.HeaderCell>
                <Table.HeaderCell>Module enseigné</Table.HeaderCell>
                <Table.HeaderCell/>
            </Table.Header>
            <tbody>
            <Table.Row>
            <Table.Cell><i className="circle icon" /></Table.Cell>
            <Table.Cell>{this.state.nomP}</Table.Cell>
            <Table.Cell>
            <select className="ui selection dropdown" onChange={this.onChange} id="filiere_id" name="filiere">
             <option>Choisi filieres</option>
              {options}
            </select></Table.Cell>
            <Table.Cell><Input type="text" placeholder="Module"/></Table.Cell>
            <Table.Cell><Button onClick={this.onUpdate}>Accepte</Button></Table.Cell>
        </Table.Row>
            </tbody>
         </Table>
         </div>
            
         <center style={{ marginTop: "15px" }}>
                    <Link to="../" class="ui left labeled icon button">
                        <i class="left arrow icon"></i>
                        To Dahsboard
            </Link>
                </center>
            </>
        )
    }
}
export default filiereAffecter;