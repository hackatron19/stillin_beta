import React, { Component } from 'react'
import CreateVerifier from './create/CreateVerifier';
import CreateMedicalProfessional from './create/CreateMedicalProfessonal';
import RegisterClient from './create/RegisterClient'
import VerifierReview from './transactions/VerifierReview';

export default class VerifierApp extends Component {
    render() {
        const { drizzle, drizzleState } = this.props;
        return (
            <div>
                <RegisterClient drizzleState={drizzleState} drizzle={drizzle} />
                <CreateMedicalProfessional drizzleState={drizzleState} drizzle={drizzle}/>
                <CreateVerifier drizzleState={drizzleState} drizzle={drizzle}/>
                <VerifierReview drizzleState={drizzleState} drizzle={drizzle}/>
            </div>
        )
    }
}
