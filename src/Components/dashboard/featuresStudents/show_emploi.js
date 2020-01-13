import React from 'react';
import { Link } from 'react-router-dom';
//import dashstudent from '../dashEtudiant';


class ShowEmploi extends React.Component {


    render() {
        return (
            <>
                <div className="container" style={{ margin:"0",marginTop: "50px", marginLeft: "25px", marginRight: "25px" }}>

                    <center><h1>Emploi du temps</h1></center>

                    <div className="ui placeholder segment" style={{  marginTop: "60px", marginLeft: "60px", marginRight: "60px" }}>
                        <div className="ui icon header">
                            <i className="pdf file outline icon"></i>
                            No documents are listed .
                        </div>
                        <div className="ui primary button">Show Document</div>
                    </div>
                </div>

                <center style={{marginTop:"55px"}}>
                <Link to="/dashStudent" class="ui left labeled icon button">
                    <i class="left arrow icon"></i>
                    To Dahsboard
                </Link>
                </center>
            </>
        )
    }
}

export default ShowEmploi;