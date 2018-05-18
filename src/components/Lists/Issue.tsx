import * as React from 'react'
import {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanel
} from '@material-ui/Core'
import { ExpandMore } from '@material-ui/icons'
import { Labels } from '../Labels'
import { markdown } from 'markdown'
import { Helpers } from '../../Helpers'

const styles = {
  title: {
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingLeft: 20,
    fontWeight: 500,
    textAlign: 'left',
    width: 500
  },
  labels: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 195
  },
  link: {
    display: 'inline-block',
    verticalAlign: 'middle',
    color: '#444',
    textDecoration: 'none'
  },
  desc: {
    textAlign: 'left',
    fontSize: 14,
    lineHeight: '20px'
  } as React.CSSProperties,
  descInner: {
    background: '#efefef',
    padding: '0 10px',
    width: '100%'
  },
  repo: {
    fontSize: 12,
    textAlign: 'left',
    fontWeight: 'normal',
    color: '#999'
  }
}

export const Issue = ({ issue }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <div style={styles.labels}>
          <Labels labels={issue.labels} />
        </div>
        <div style={styles.title as any}>
          <a href={issue.html_url} target="_blank" style={styles.link}>{issue.title}</a>
          <div style={styles.repo as any}>{Helpers.getRepoNameFromUrl(issue.repository_url)}</div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={styles.desc}>
        <div style={styles.descInner} dangerouslySetInnerHTML={{ __html: markdown.toHTML(issue.body) }} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
