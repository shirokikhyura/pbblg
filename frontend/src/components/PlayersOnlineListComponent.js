import React from 'react';
import PropTypes from 'prop-types';

const PlayersOnlineListComponent = ({players}) => (
    <div className="online-players-list">
        <ul className="list-group mb-3">
            {Object.keys(players).map(playerId => (
                <li key={playerId} className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">{players[playerId].name} #{playerId}</h6>
                        <small className="text-muted"></small>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

PlayersOnlineListComponent.propTypes = {
    players: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default PlayersOnlineListComponent;
