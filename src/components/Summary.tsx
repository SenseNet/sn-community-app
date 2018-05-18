import * as React from 'react'
import { Card, CardContent } from '@material-ui/Core'
import { withStyles } from '@material-ui/Core'
import { Typography } from '@material-ui/Core'

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
  },
  number: {
    color: '#13a5ad',
    fontSize: 45,
    fontFamily: 'Gotham',
    textTransform: 'uppercase'
  }
})

// import wow from '../data/wow800_1x.jpg'

const Summary = ({ allReputation, classes, allPrs, allReputationPerYear }) => {
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography itemType="headline" className={classes.number}>
            {allReputation}
          </Typography>
          <Typography itemType="body1" className={classes.title}>
            <strong>reputation</strong> is earned in this quarter
                    </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography itemType="headline" className={classes.number}>
            {allPrs}
          </Typography>
          <Typography itemType="body1" className={classes.title}>
            <strong>pull requests</strong> was made
                    </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography itemType="headline" className={classes.number}>
            {allReputationPerYear}
          </Typography>
          <Typography itemType="body1" className={classes.title}>
            reputation is earned <strong>this year</strong>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles as any)(Summary)
