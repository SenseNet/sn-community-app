import * as React from 'react'
import {
    Link
} from 'react-router-dom'
import Radium from 'radium';
import * as FontAwesome from 'react-fontawesome'

const RadiumLink = Radium(Link);

const styles = {
    remainingInfo: {
        margin: 20,
        lineHeight: '25px'
    },
    red: {
        color: '#EF5350',
        fontWeight: 'bold'
    },
    blue: {
        color: '#42A5F5',
        fontWeight: 'bold'
    },
    link: {
        color: '#42A5F5',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'underline'
        }
    },
    beer: {}
}

export const RemainingPr = ({ remaining }) => {
    const color = remaining > 5 ? styles.red : styles.blue
    const el = remaining > 0 ?
        (
            <div style={styles.remainingInfo}>
                You have to make <span style={color as any}>{remaining}</span> pull requests in this quarter.
        <br />
                <RadiumLink to="/help" style={styles.link}><FontAwesome name="question-circle-o" /> Need a helping hand to achieve it?</RadiumLink>
            </div>
        ) :
        (
            <div style={styles.remainingInfo}>
                <FontAwesome name="beer" style={styles.beer} />Congrats! You made more than 10 pull requests in this quarter!<FontAwesome name="beer" style={styles.beer} /><br />
            </div>
        )
    return el
}