import React from 'react';
import LogoUca from '../../../assets/img/uca.jpg';
import { Link } from 'react-router-dom';
import { Accordion, Icon } from 'semantic-ui-react'

//import { Link } from 'react-router-dom';
//import dashstudent from '../dashEtudiant';


class addNotes extends React.Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <>
            <center>
                    <img src={LogoUca} alt="logo uca" style={{ width: "450px" }} />
                </center>
                <div className="ui segment" style={{ marginTop: "80px", marginLeft: "25px", marginRight: "25px" }}>


                <center style={{marginTop:"10px"}}>
                <Link to="/dashProf" class="ui left labeled icon button">
                    <i class="left arrow icon"></i>
                    To Dahsboard
                </Link>
                </center>
                
                    <div className="ui text container">
                        <center>
                            <h2 className="ui massive label">Ajouter Notes </h2>
                        </center>

                    </div>
                    <center>
                        <Accordion styled style={{ width: "880px" }}>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                               Notes des Devoires & Exames
                    </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>

                                <table class="ui celled striped table">
                                    <thead class="">
                                        <tr class=""><th colspan="3" class="">LP Ingénieriedes Systemes Informatiques Et Logiciels
                                            <div style={{ float: "right" }}>
                                            <Link to="/filiers/id" className="ui small primary button">DS</Link>
                                            <Link to="/filiers/id" className="ui small primary button">Exams</Link>
                                            </div>

                                        </th></tr>
                                    </thead>
                                </table>






                                <table class="ui celled striped table">
                                    <thead class="">
                                        <tr class=""><th colspan="3" class="">LP Management Bancaire et Financier
                                            <div style={{ float: "right" }}>
                                            <Link to="/filiers/id" className="ui small primary button">DS</Link>
                                            <Link to="/filiers/id" className="ui small primary button">Exams</Link>
                                            </div>
                                        </th></tr>
                                    </thead>
                                </table>
                            </Accordion.Content>
                        </Accordion>
                    </center>
                </div>

            </>
        )
    }
}

export default addNotes;