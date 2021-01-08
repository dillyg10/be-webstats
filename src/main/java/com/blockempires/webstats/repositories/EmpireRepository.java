package com.blockempires.webstats.repositories;

import com.blockempires.webstats.components.Empire;
import com.blockempires.webstats.components.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import org.springframework.transaction.annotation.Transactional;

/**
 * Read-only repository for empires
 */
@Transactional(readOnly = true)
public interface EmpireRepository extends PagingAndSortingRepository<Empire, Long> {

    /**
     * Get an empire by its name attribute exactly
     * @param name Name to search
     * @return Empire if found, 404 if not
     */
    Empire findEmpireByName(String name);

    /**
     * Gets all empires in a pageable view ordered by their ELO descending
     * @param pageable The view to select
     * @return All of the empires
     */
    Page<Empire> getAllByOrderByEloDesc(Pageable pageable);

    /**
     * Find empires with a display name similar to the one provided.
     * Used primarily for search requests
     * @param displayName Display name to search like
     * @param pageable The limit of how many results to return
     * @return The empires will a name similar to the one provided
     */
    Page<Empire> findEmpiresByDisplayNameLike(String displayName, Pageable pageable);
}
