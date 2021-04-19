import React from 'react';


class PersonForm extends React.Component {

  


    render() {
        return (
            <div className="container" >
                <div className="row jumbotron">
                  
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.props.person.firstName} onChange={this.props.onFirstNameChange} placeholder="First Name" />
                    </div>
                   
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.props.person.lastName} onChange={ this.props.onLastNameChange} placeholder="Last Name" />
                    </div>

                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.props.person.age} onChange={this.props.onAgeChange}  placeholder="Age" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={this.onAddClick}> Add</button>
                   
                        <button className="btn btn-warning ml-3" onClick={this.onClearClick}> Clear All</button>
                    </div>

                </div>

            </div>
        );


    }


}
export default PersonForm;