import React from 'react';
import Axios from 'axios';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class ListProfessor extends React.Component {

    constructor() {
        super();

        this.state = {
            nomProfessor: "",
            email: "",
            prof_id:"",
            professors: []
        }
    }

    loadProfessors = () => {
        Axios.get('//localhost:5000/api/professors')
            .then((res) => {
                this.setState({
                    professors: res.data.professors
                })
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            }
        )
    }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        this.loadProfessors();
    }

    ListingProfs = () => {

        return this.state.professors.map((data) =>
            <Table.Row>
                <Table.Cell><i className="circle icon" /></Table.Cell>
                <Table.Cell>{data.fullname}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell collapsing><Link to={"/dashAdmin/Professors/Details/" + data._id} className="ui primary button" style={{float:"right"}}>Deatils</Link></Table.Cell>
            </Table.Row>
        )
    }



    render() {
        return (
            <>
                <div className="ui segment" style={{ marginTop: "50px", textAlign: "center", height: "vh", marginLeft: "150px", marginRight: "150px" }}>
                    <h1 style={{ textAlign: "center" }}>Listes des professors enregistrés</h1>
                    <Table definition>
                        <Table.Header>
                            <Table.HeaderCell />
                            <Table.HeaderCell>FullName</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell/>
                        </Table.Header>
                        <tbody>
                            {this.ListingProfs()}
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

export default ListProfessor;