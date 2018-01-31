import * as React from 'react'
import { connect } from 'react-redux'
import { SNCommunityAppReducers } from '../Reducers'
import List, { ListItem } from 'material-ui/List'
import * as moment from 'moment'

const styles = {
  list: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  },
  title: {
    textAlign: 'left',
    color: '#777',
    fontWeight: 'normal',
    marginTop: 0,
    marginBottom: 5
  },
  link: {
    textDecoration: 'none'
  },
  tags: {
    display: 'block',
    textAlign: 'left'
  },
  tag: {
    fontSize: 13,
    background: '#E0F2F1',
    borderRadius: 3,
    marginRight: 5,
    color: '#26A69A',
    padding: '2px 5px'
  },
  date: {
    fontSize: 13,
    verticalAlign: 'top',
    width: 200,
    textAlign: 'left',
    fontWeight: 500
  },
  datetime: {

  },
  img: {
    maxWidth: 20,
    maxHeight: 20,
    borderRadius: 3,
    margin: 5,
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  account: {
    textAlign: 'left',
    fontSize: 13
  },
  t: {
    color: '#13a5ad',
    fontSize: 55,
    marginBottom: 20,
    fontFamily: 'Gotham',
    textTransform: 'uppercase'
  }
}

interface SNQuestionsProps {
  questions: any[]
}

class SNQuestions extends React.Component<SNQuestionsProps, {}> {
  render() {
    const { questions } = this.props
    return (
      <div style={styles.list}>
        <h2 style={styles.t}>Unanswered sn questions</h2>
        <List>
          {questions.map((question, index) => {
            const date = new Date(question.creation_date * 1000)
            date.toISOString()
            return <ListItem key={index}>
              <div style={styles.datetime}>
                <div style={styles.date as any}>{moment(date).fromNow()}</div>
                <div style={styles.account}><img src={question.owner.profile_image} style={styles.img} />{question.owner.display_name}</div>
              </div>
              <div>
                <a href={question.link} style={styles.link}>
                  <h3 style={styles.title as any}>{question.title}</h3>
                </a>
                <div style={styles.tags}>
                  {question.tags.map((tag, i) => {
                    return <span key={i} style={styles.tag}>{tag}</span>
                  })}
                </div>
              </div>
            </ListItem>
          })}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state, match) => {
  return {
    questions: SNCommunityAppReducers.getQuestionsUnanswered(state.SNCommunityApp.stackoverflow)
  }
}

export default connect(mapStateToProps, {})(SNQuestions)
