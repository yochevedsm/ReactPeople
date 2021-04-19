import React from 'react';
import PersonForm from './PersonForm.js';
import PersonRow from './PersonRow.js';

class PersonTable extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },

        people: []
    }

    onFirstNameChange = e => {
        this.setState({ person: { ...this.state.person, firstName: e.target.value } });
     
       }
    onLastNameChange = e => {
        this.setState({ person: { ...this.state.person, lastName: e.target.value } });
    }
    onAgeChange = e => {
        this.setState({ person: { ...this.state.person, age: e.target.value } });
    }
    onAddClick = () => {
           
        const peopleCopy = [...this.state.people, this.state.person];
        console.log(peopleCopy);
        this.setState({ people: peopleCopy, person: { firstName: '', lastName: '', age: '' } });       
    }
    onClearClick = () => {
        this.setState({ people:[] })
    }

    fillTable = () => {
        if (this.state.people.length === 0) {
            return <h1>There is no one added to the table.Be the first to add someone! </h1>
        }

        return (
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((person, idx) => <PersonRow person={person} key={idx}/>)}
                </tbody>
            </table>
        )
     }
    


        
render() {

    return (
        <div className="container mt-5">
            <PersonForm
                onFirstNameChange={this.onFirstNameChange}            
                onLastNameChange={this.onLastNameChange}
                onAgeChange={this.onAgeChange}
                onAddClick={this.onAddClick}
                onClearClick={this.onClearClick}
                person={this.state.person} />
    
            {this.fillTable()}

        </div>

    );

   }
}   

export default PersonTable;