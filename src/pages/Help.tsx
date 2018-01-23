import * as React from 'react'
import { Link } from 'react-router-dom'
import List, {
    ListItem,
    ListItemText
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import SchoolIcon from 'material-ui-icons/School'
import * as FontAwesome from 'react-fontawesome'

const styles = {
    help: {
        width: '100%',
        maxWidth: 600,
        margin: '0 auto'
    },
    avatar: {
        marginRight: 10
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        color: '#13a5ad',
        fontSize: 55,
        marginBottom: 20,
        fontFamily: 'Gotham',
        textTransform: 'uppercase'
    }
}

export const Help = () => {
    return (
        <div style={styles.help}>
            <h2 style={styles.title}>Help</h2>
            <List>
                <ListItem>
                    <Avatar style={styles.avatar}>
                        <SchoolIcon />
                    </Avatar>
                    <a href="https://github.com/Sensenet/sn-resources/training" style={styles.link} target="_blank"><ListItemText primary="Training materials" /></a>
                </ListItem>
                <ListItem>
                    <Avatar style={styles.avatar}>
                        <FontAwesome name="stack-overflow" />
                    </Avatar>
                    <a href="https://stackoverflow.com/help/whats-reputation" style={styles.link} target="_blank"><ListItemText primary="What is reputation? How do I earn (and lose) it?" /></a>
                </ListItem>
                <ListItem>
                    <Avatar style={styles.avatar}>
                        <FontAwesome name="stack-overflow" />
                    </Avatar>
                    <Link to="/tips-and-tricks/so" style={styles.link}><ListItemText primary="How can I earn Stackoverflow reputation quickly?" /></Link>
                </ListItem>
                <ListItem>
                    <Avatar style={styles.avatar}>
                        <FontAwesome name="stack-overflow" />
                    </Avatar>
                    <Link to="/questions" style={styles.link}><ListItemText primary="Unanswered questions on stackoverflow with the tag 'sensenet'" /></Link>
                </ListItem>
                <ListItem>
                    <Avatar style={styles.avatar}>
                        <FontAwesome name="github" />
                    </Avatar>
                    <Link to="/tips-and-tricks:pr" style={styles.link}><ListItemText primary="How to make the sufficient amount of pull requests?" /></Link>
                </ListItem>
                <ListItem>
                    <Avatar style={styles.avatar}>
                        <FontAwesome name="github" />
                    </Avatar>
                    <Link to="/issues/help%20wanted" style={styles.link}><ListItemText primary="Good first sensenet issues" /></Link>
                </ListItem>
                <ListItem>
                    <Avatar style={styles.avatar}>
                        <FontAwesome name="github" />
                    </Avatar>
                    <Link to="/issues" style={styles.link}><ListItemText primary="All currently open sensenet related issues" /></Link>
                </ListItem>
            </List>
        </div>
    )
}