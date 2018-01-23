import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import {
    Link
} from 'react-router-dom'
import Button from 'material-ui/Button'
import Radium from 'radium';

const RadiumLink = Radium(Link);

const logo = require('../data/sensenet-logo.png');

const styles = {
    header: {
        background: '#fff'
    },
    logo: {
        flex: 1,
        color: '#fff',
        width: 40,
        textDecoration: 'none',
        fontFamily: 'roboto',
        marginLeft: 24,
        maxWidth: 30,
        maHeight: 30,
        verticalAlign: 'middle',
        marginRight: 10
    },
    button: {
        color: '#777',
        textDecoration: 'none'
    }
}

export const Header = () => {
    return (
        <AppBar position="static" style={styles.header}>
            <Toolbar>
                <Button style={styles.button}>
                    <RadiumLink to="/company">
                        <img src={logo} alt="sensenet" aria-label="sensenet" style={styles.logo} /></RadiumLink>
                </Button>
                {/* <Button style={styles.button}>
                    <RadiumLink to="/6915310" style={styles.button}>My stats</RadiumLink>
                </Button> */}
                <Button style={styles.button}>
                    <RadiumLink to="/company" style={styles.button}>Company stats</RadiumLink>
                </Button>
                <Button style={styles.button}>
                    <RadiumLink to="/questions" style={styles.button}>Questions</RadiumLink>
                </Button>
                <Button style={styles.button}>
                    <RadiumLink to="/issues" style={styles.button}>Issues</RadiumLink>
                </Button>
                {/* <Button style={styles.button}>
                    <RadiumLink to="/rules" style={styles.button}>Rules</RadiumLink>
                </Button> */}
                <Button style={styles.button}>
                    <RadiumLink to="/help" style={styles.button}>Help</RadiumLink>
                </Button>
            </Toolbar>
        </AppBar>
    )
}