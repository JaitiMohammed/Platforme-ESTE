import React from 'react';
import Axios from 'axios';
import { Table } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class Students extends React.Component {
    // list des etudiants par leurs filières 
    constructor() {
        super();

        this.state = {
            nomStudent: "",
            nomF: "",
            idStudent: "",
            filiereStudent: "",
            students: []
        }
    }
    loadStudents = () => {
        Axios.get('//localhost:5000/api/filieres/students/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    students: res.data.students,
                    nomF: res.data.sf.abrv
                })
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            }
            )
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.loadStudents();
    }

    ListingStudents = () => {

        return this.state.students.map((data) =>
            <Table.Row>
                <Table.Cell><i className="circle icon" /></Table.Cell>
                <Table.Cell>{data.fullname}</Table.Cell>
                <Table.Cell>{this.state.nomF}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
            </Table.Row>
        )
    }


    render() {
        return (
            <>
                <div className="ui segment"  style={{marginTop:"50px", textAlign: "center", height: "vh", marginLeft:"150px" ,marginRight:"150px"}}>
                    <h1 style={{ textAlign: "center" }}>Students List</h1>
                    <Table definition>
                        <Table.Header>
                            <Table.HeaderCell/>
                            <Table.HeaderCell>FullName</Table.HeaderCell>
                            <Table.HeaderCell>Filiere</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                        </Table.Header>
                        <tbody>
                            {this.ListingStudents()}
                        </tbody>
                    </Table>
                </div>
                <center style={{ marginTop: "15px" }}>
                    <Link to="../Filieres" class="ui left labeled icon button">
                        <i class="left arrow icon"></i>
                        To Dahsboard
            </Link>
                </center>
            </>
        )
    }
}
export default Students;