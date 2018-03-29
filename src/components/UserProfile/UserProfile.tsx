import * as React from 'react'
import { Helpers } from '../../Helpers'
import { BadgeRow } from './BadgeRow'
import { ReputationRow } from './ReputationRow'
import { Remaining } from './Remaining'
import { RemainingPr } from './RemainingPr'
import { PrRow } from './PrRow'
import * as FontAwesome from 'react-fontawesome'
import 'typeface-roboto'

const styles = {
  name: {
    color: '#444',
    textDecoration: 'none'
  },
  githubusername: {
    fontSize: 12
  },
  profileImg: {
    maxWidth: 150,
    margin: '0 auto 10px',
    borderRadius: '5px'
  },
  info: {},
  imgContainer: {
    maxWidth: 150,
    position: 'relative',
    margin: '0 auto'
  },
  medal: {
    position: 'absolute',
    top: 7,
    right: 12
  }
}

export const UserProfile = ({ user, githubUser, position, top, remaining, remainingPr }) => {
  let medal
  switch (top) {
    case 1:
      medal = 'gold-medal'
      break
    case 2:
      medal = 'silver-medal'
      break
    case 3:
      medal = 'bronze-medal'
      break
    default:
      medal = null
  }
  return (
    <div>
      <h2>
        <a href={user.link} style={styles.name} title={githubUser.name}>{Helpers.decodeHtml(user.display_name)}</a>
      </h2>
      <span style={styles.githubusername}>{githubUser.username}</span>
      <div style={styles.imgContainer as any}>
        <a href={user.link} style={styles.name}>
          <img src={user.profile_image} style={styles.profileImg} />
        </a>
        {top ? <FontAwesome name={medal} style={styles.medal} title={`Nr.${top} user in reputation change this quarter`} /> : null}
      </div>
      <BadgeRow badges={user.badge_counts} />
      <div style={styles.info}>
        <ReputationRow reputation={user.reputation} change={user.reputation_change_quarter} />
        <Remaining remaining={remaining} />
        <br />
        <PrRow prNum={githubUser.count} />
        <RemainingPr remaining={remainingPr} />
      </div>
    </div>
    // top tags külön action /2.2/users/6915310/top-tags?site=stackoverflow
  )
}
