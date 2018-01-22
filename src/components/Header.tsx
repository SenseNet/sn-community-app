import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import {
    Link
} from 'react-router-dom'
import Button from 'material-ui/Button'
import Radium from 'radium';

const RadiumLink = Radium(Link);

const logo = require('../sensenet_white.png');

const styles = {
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
        color: '#fff',
        textDecoration: 'none'
    }
}

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <img src={logo} alt="sensenet" aria-label="sensenet" style={styles.logo} />
                <Button style={styles.button}>
                    <RadiumLink to="/6915310" style={styles.button}>My stats</RadiumLink>
                </Button>
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