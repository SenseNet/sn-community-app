import * as React from 'react'
import { Drawer, Divider, List, withStyles } from '@material-ui/Core'

const styles = theme => ({
  drawerHeader: theme.mixins.toolbar,
})

const Login = ({ classes }) => {
  return (
    <Drawer className="events-drawer">
      <div className={classes.drawerHeader} />
      <Divider />
      <List>aaaa</List>
      <Divider />
      <List>bbbbb</List>
    </Drawer>
  )
}

export default withStyles(styles)(Login)
