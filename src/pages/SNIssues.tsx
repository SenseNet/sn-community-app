import * as React from 'react'
import { connect } from 'react-redux'
import { SNCommunityAppReducers } from '../Reducers'
import { Issue } from '../components/Lists/Issue'

const styles = {
    list: {
        width: '100%',
        maxWidth: 800,
        margin: '0 auto'
    },
    title: {
        color: '#13a5ad',
        fontSize: 55,
        marginBottom: 20,
        fontFamily: 'Gotham',
        textTransform: 'uppercase'
    }
}

interface IssuesProps {
    issues: any[],
    match: any,
}

class Issues extends React.Component<IssuesProps, {}> {
    constructor(props: any) {
        super(props)
    }
    render() {
        const { issues, match } = this.props
        return (

            <div style={styles.list}>
                {match.params.label !== undefined && match.params.label.length > 0 ?
                    <h2 style={styles.title}>Open sn issues with label '{match.params.label}'</h2> :
                    <h2 style={styles.title}>Open sn issues</h2>}
                {issues.map((issue, index) => {
                    return <Issue key={issue.id} issue={issue} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state, match) => {
    const { label } = match.match.params
    return {
        issues: SNCommunityAppReducers.getIssuesByLabel(state.SNCommunityApp.github, label)
    }
}

export default connect(mapStateToProps, {})(Issues)