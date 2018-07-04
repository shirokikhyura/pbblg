<?php

namespace App\WebSocket\Action\GetGames;

use App\Domain\Game\GameStatus;
use App\Domain\Game\UsersInGames;
use Psr\Http\Message\ServerRequestInterface;
use T4webDomainInterface\Infrastructure\RepositoryInterface;
use App\WebSocket\Action\ActionHandlerInterface;
use App\Domain\Game\Game;
use App\Domain\Game\ViewModel\Game as GameViewModel;
use App\WebSocket\Action\Exception\NotAuthorizedException;

class GetGamesHandler implements ActionHandlerInterface
{
    /**
     * @var RepositoryInterface
     */
    private $gameRepository;

    /**
     * @var RepositoryInterface
     */
    private $usersInGamesRepository;

    /**
     * @param RepositoryInterface $gameRepository
     * @param RepositoryInterface $usersInGamesRepository
     */
    public function __construct(
        RepositoryInterface $gameRepository,
        RepositoryInterface $usersInGamesRepository
    ) {
        $this->gameRepository = $gameRepository;
        $this->usersInGamesRepository = $usersInGamesRepository;
    }

    /**
     * @param ServerRequestInterface $request
     * @return mixed result
     */
    public function handle(ServerRequestInterface $request)
    {
        if (!$request->getAttribute('currentUser')) {
            throw new NotAuthorizedException();
        }

        /** @var Game[] $games */
        $games = $this->gameRepository->findMany([
            'order' => 'id DESC',
        ]);

        $result = [];

        /** @var Game $game */
        foreach ($games as $game) {
            $gameVieModel = new GameViewModel($game);
            $result[$game->getId()] = $gameVieModel->extract();
            $result[$game->getId()]['countFreePlaces'] = GameStatus::MAX_PLAYERS;
        }

        $usersInGame = $this->usersInGamesRepository->findMany([
            'gameId_in' => array_keys($result),
            'order' => 'gameId ASC',
        ]);

        if ($usersInGame) {
            /** @var UsersInGames $userInGame */
            foreach ($usersInGame as $userInGame) {
                $result[$userInGame->getGameId()]['countFreePlaces']--;
                if ($result[$userInGame->getGameId()]['countFreePlaces'] < 0) {
                    $result[$userInGame->getGameId()]['countFreePlaces'] = 0;
                }
            }
        }

        return $result;
    }
}
