import * as React from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import List from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

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
