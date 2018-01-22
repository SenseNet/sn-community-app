import * as React from 'react'

const styles = {
    badges: {
        margin: 0,
        padding: 0
    },
    badge: {
        listStyleType: 'none',
        display: 'inline-block',
        borderRadius: '50%',
        padding: 5,
        minWidth: 20,
        color: '#fff'
    },
    gold: {
        background: '#ffd700',
        marginRight: 10
    },
    silver: {
        background: '#c0c0c0',
        marginRight: 10
    },
    bronze: {
        background: '#cd7f32'
    }
}

export const BadgeRow = ({ badges }) => {
    const { bronze, gold, silver } = badges;
    return (
        <ul style={styles.badges}>
            <li style={{...styles.badge, ...styles.gold}} title={gold > 1 ? gold + ' gold badges' : gold + ' gold badge'}>
                {gold}
            </li>
            <li style={{...styles.badge, ...styles.silver}} title={silver > 1 ? silver + ' silver badges' : silver + ' silver badge'}>
                {silver}
            </li>
            <li style={{...styles.badge, ...styles.bronze}} title={bronze > 1 ? bronze + ' bronze badges' : bronze +  ' bronze badge'}>
                {bronze}
            </li>
        </ul>
    )
}