import React from 'react';

class PersonRow extends React.Component {
      

    render() {
        return (
            <tr className={this.props.person.age >= 65 ? 'text-danger' : ''} >
                <th>{this.props.person.firstName}</th>
                <th>{this.props.person.lastName}</th>
                <th>{this.props.person.age}</th>
            </tr>


        );
    }
}
export default PersonRow;
