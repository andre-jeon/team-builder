import React from 'react';

const TeamMember = (props) => {
    const {details} = props

    if (!details) {
        return <h3>Working fetching your teammate&apos;s details...</h3>
    }

    return(
        <div className = 'member-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}
export default TeamMember; 