import * as React from 'react'
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { markdown } from 'markdown'

const tips = require('../data/sotips.json');

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
        maxWidth: 800,
        margin: '0 auto'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    description: {
        textAlign: 'left',
        fontSize: theme.typography.pxToRem(13),
        lineHeight: theme.typography.pxToRem(20),
    }
});

const s = {
    title: {
        color: '#13a5ad',
        fontSize: 55,
        marginBottom: 20,
        fontFamily: 'Gotham',
        textTransform: 'uppercase'
    }
}

const SoTips = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h2 style={s.title}>Stackoverflow tips and tricks</h2>
            {tips.map((tip, index) => {
                return (<ExpansionPanel key={index}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{tip.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.description} dangerouslySetInnerHTML={{ __html: markdown.toHTML(tip.description) }} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>)
            })}
        </div>
    )
}

export default withStyles(styles)(SoTips);