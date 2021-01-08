package com.blockempires.webstats.repositories;

import com.blockempires.webstats.components.Empire;
import com.blockempires.webstats.components.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 * Read-only preository for players
 */
@Transactional(readOnly = true)
public interface PlayerRepository extends PagingAndSortingRepository<Player, Long> {
    /**
     * Finds players by their empire ID
     * @param id The empire id to search by
     * @return All players with an empire Id equal to the one provided
     */
    List<Player> findPlayersByEmpireIdEquals(Long id);

    /**
     * Finds a single player by the username, or 404 if it is not found
     * @param username The username to search by
     * @return The player found, or 404
     */
    Player findPlayerByUsername(String username);

    /**
     * Get a limited view of players ordered by ELO descending
     * @param pageable The limit paramaters
     * @return The players in this view
     */
    Page<Player> getAllByOrderByEloDesc(Pageable pageable);

    /**
     * Finds players in a limited view based on usernames similar to the one provided
     * @param username The username of the player to searchby
     * @param pageable The query limts
     * @return The players with similar usernames
     */
    Page<Player> findPlayersByUsernameLike(String username, Pageable pageable);
}
