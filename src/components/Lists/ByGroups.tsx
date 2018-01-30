import * as React from 'react';
import List from 'material-ui/List';
import { Group } from './Group';
import { connect } from 'react-redux';
import { SNCommunityAppReducers } from '../../Reducers';

const styles = {
    toplist: {
        textAlign: 'left',
        margin: '0 auto',
        padding: 0,
        maxWidth: 600,
        listStyleType: 'none'
    }
}

class ByGroups extends React.Component<{ prgroups: any, groups: any}, {}> {
    byReputation(obj: any) {
        var arr = [];
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                arr.push({
                    'name': prop,
                    'reputation': obj[prop].reputation
                });
            }
        }
        return arr.sort(function (a: any, b: any) {
            return b.reputation - a.reputation;
        });
    }

    render() {
        const { groups, prgroups } = this.props;
        const groupses = this.byReputation(groups.entities);
        return (

            <List style={styles.toplist} >
                {
                    groupses.map(function (group: any, index: number) {
                        let g = {
                            id: group.name,
                            rank: index + 1,
                            name: group.name,
                            prInQuarter: prgroups[group.name].pr,
                            index: index,
                            reputationInQuarter: group.reputation
                        }
                        const columns = ['name', 'reputationInQuarter', 'prInQuarter']
                        return (<Group group={g} key={index} columns={columns} />)
                    })
                }
            </List>
        )
    }
}

const mapStateToProps = (state, match) => {
    return {
        groups: SNCommunityAppReducers.getGroups(state.SNCommunityApp)
    }
}

export default connect(mapStateToProps, {})(ByGroups)