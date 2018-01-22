import * as React from 'react'
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        width: '32%',
        marginRight: '1%',
        display: 'inline-block',
        verticalAlign: 'middle'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    container: {
        width: '100%',
        maxWidth: 800,
        margin: '25px auto 0'
    }
});

// import wow from '../data/wow800_1x.jpg';

const Summary = ({ allReputation, classes, allPrs, allReputationPerYear }) => {
    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" className={classes.number}>
                        {allReputation}
                    </Typography>
                    <Typography type="body1" className={classes.title}>
                        reputation is earned in this quarter
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" className={classes.number}>
                        {allPrs}
                    </Typography>
                    <Typography type="body1" className={classes.title}>
                        pull requests was made
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" className={classes.number}>
                        {allReputationPerYear}
                    </Typography>
                    <Typography type="body1" className={classes.title}>
                        reputation is earned this year
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(Summary)