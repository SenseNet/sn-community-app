import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'

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
    party: {

    }
}

export const Remaining = ({ remaining }) => {
    const color = remaining > 50 ? styles.red : styles.blue
    const el = remaining > 0 ?
        (
        <div style={styles.remainingInfo}>
            You have to gain <span style={color as any}>{remaining}</span> reputation in this quarter.
        </div>
        ) :
        (
        <div style={styles.remainingInfo}>
            <FontAwesome name="party" style={styles.party} />Congrats! You earned more than 100 reputation in this quarter!<FontAwesome name="party" style={styles.party} /><br />
        </div>
        )
    return el
}