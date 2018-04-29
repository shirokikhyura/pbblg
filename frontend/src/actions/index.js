export const PLAYER_AUTHENTICATED = 'PLAYER_AUTHENTICATED';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN_FAIL = 'RECEIVE_LOGIN_FAIL';
export const RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

export const START_CREATE_NEW_GAME = 'START_CREATE_NEW_GAME';
export const NEW_GAME_WAS_CREATED = 'NEW_GAME_WAS_CREATED';
export const REQUEST_GAME_STATE = 'REQUEST_GAME_STATE';
export const RECEIVE_GAME_STATE = 'RECEIVE_GAME_STATE';
export const RECEIVE_JOIN_GAMES_LIST = 'RECEIVE_JOIN_GAMES_LIST';
export const REQUEST_JOIN_GAMES_LIST = 'REQUEST_JOIN_GAMES_LIST';
export const REQUEST_PLAYERS_ONLINE_LIST = 'REQUEST_PLAYERS_ONLINE_LIST';
export const RECEIVE_PLAYERS_ONLINE_LIST = 'RECEIVE_PLAYERS_ONLINE_LIST';
export const CURRENT_PLAYER_REQUEST_JOIN_GAME = 'CURRENT_PLAYER_REQUEST_JOIN_GAME';
export const CURRENT_PLAYER_JOINED_GAME = 'CURRENT_PLAYER_JOINED_GAME';
export const REQUEST_EXIT_GAME = 'REQUEST_EXIT_GAME';
export const RECEIVE_EXIT_GAME = 'RECEIVE_EXIT_GAME';
export const RECEIVE_OTHER_PLAYER_EXIT_GAME = 'RECEIVE_OTHER_PLAYER_EXIT_GAME';
export const LOGIN_PLAYER = 'LOGIN_PLAYER';
export const LOGOUT_PLAYER = 'LOGOUT_PLAYER';
export const SOCKET_CONNECTED = 'SOCKET_CONNECTED';
export const DEBUG_SERVER_STATE = 'DEBUG_SERVER_STATE';
export const OTHER_PLAYER_JOINED_GAME = 'OTHER_PLAYER_JOINED_GAME';

export const playerAuthenticated = (player) => (
    {
        type: PLAYER_AUTHENTICATED,
        player
    }
);
export const requestLogin = (login, password) => (
    {
        type: REQUEST_LOGIN,
        login,
        password
    }
)
export const receiveLoginFail = (error) => (
    {
        type: RECEIVE_LOGIN_FAIL,
        error
    }
)
export const receiveLoginSuccess = (accessToken, player) => (
    {
        type: RECEIVE_LOGIN_SUCCESS,
        accessToken,
        player
    }
)
export const requestLogout = () => (
    {
        type: REQUEST_LOGOUT
    }
)

export const receiveLogout = () => (
    {
        type: RECEIVE_LOGOUT
    }
)


export const createNewGameAction = () => (
    {
        type: START_CREATE_NEW_GAME
    }
);
export const newGameWasCreatedAction = (game) => (
    {
        type: NEW_GAME_WAS_CREATED,
        game
    }
);
export const requestGameState = () => (
    {
        type: REQUEST_GAME_STATE
    }
);
export const receiveGameState = (data) => (
    {
        type: RECEIVE_GAME_STATE,
        data
    }
);
export const requestJoinGamesList = () => (
    {
        type: REQUEST_JOIN_GAMES_LIST
    }
);
export const receiveJoinGamesList = (data) => (
    {
        type: RECEIVE_JOIN_GAMES_LIST,
        data
    }
);
export const requestPlayersOnlineList = () => (
    {
        type: REQUEST_PLAYERS_ONLINE_LIST
    }
)
export const receivePlayersOnlineList = (playersOnline) => (
    {
        type: RECEIVE_PLAYERS_ONLINE_LIST,
        playersOnline
    }
);
export const requestExitGame = () => (
    {
        type: REQUEST_EXIT_GAME
    }
);
export const receiveExitGame = () => (
    {
        type: RECEIVE_EXIT_GAME
    }
);
export const receiveOtherPlayerExitGame = (player, game) => (
    {
        type: RECEIVE_OTHER_PLAYER_EXIT_GAME,
        player,
        game
    }
);
export const currentPlayerRequestJoinGame = (gameId) => (
    {
        type: CURRENT_PLAYER_REQUEST_JOIN_GAME,
        gameId
    }
);
export const currentPlayerJoinedGame = (gameId) => (
    {
        type: CURRENT_PLAYER_JOINED_GAME,
        gameId
    }
);
export const logoutPlayer = () => (
    {
        type: LOGOUT_PLAYER
    }
)
export const socketConnectedAction = () => (
    {
        type: SOCKET_CONNECTED
    }
)
export const debugServerState = (serverState) => (
    {
        type: DEBUG_SERVER_STATE,
        serverState
    }
)
export const otherPlayerJoinedGame = (player) => (
    {
        type: OTHER_PLAYER_JOINED_GAME,
        player
    }
)