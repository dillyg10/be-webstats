package com.blockempires.webstats.components;

import org.springframework.lang.Nullable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

/**
 * This represents a player object. Players are created upon joining the server.
 * Information about the player is cached here, along with additional transactional information.
 */
@Entity
public class Player {
    @Id
    @GeneratedValue
    private long id;

    private String username;
    private String role;

    @Nullable
    private Long empireId; // Players can have a null empire ID

    private int elo;

    private int level;
    private double experience;
    private String minecraftId;
    private LocalDateTime created;

    private int kills;
    private int deaths;
    private int objectivesCompleted;
    private int itemsSold;
    private int barbariansRaided;
    private int empiresRaided;
    private int totalRaids;
    private int relicsStolen;

    protected Player(){}

    public Player(String username, String role, @Nullable Long empireId, int elo, int level, double experience, String minecraftId, LocalDateTime created, int kills, int deaths, int objectivesCompleted, int itemsSold, int barbariansRaided, int empiresRaided, int totalRaids, int relicsStolen) {
        this.username = username;
        this.role = role;
        this.empireId = empireId;
        this.elo = elo;
        this.level = level;
        this.experience = experience;
        this.minecraftId = minecraftId;
        this.created = created;
        this.kills = kills;
        this.deaths = deaths;
        this.objectivesCompleted = objectivesCompleted;
        this.itemsSold = itemsSold;
        this.barbariansRaided = barbariansRaided;
        this.empiresRaided = empiresRaided;
        this.totalRaids = totalRaids;
        this.relicsStolen = relicsStolen;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getRole() {
        return role;
    }

    @Nullable
    public Long getEmpireId() {
        return empireId;
    }

    public int getElo() {
        return elo;
    }

    public int getLevel() {
        return level;
    }

    public double getExperience() {
        return experience;
    }

    public String getMinecraftId() {
        return minecraftId;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public int getKills() {
        return kills;
    }

    public int getDeaths() {
        return deaths;
    }

    public int getObjectivesCompleted() {
        return objectivesCompleted;
    }

    public int getItemsSold() {
        return itemsSold;
    }

    public int getBarbariansRaided() {
        return barbariansRaided;
    }

    public int getEmpiresRaided() {
        return empiresRaided;
    }

    public int getTotalRaids() {
        return totalRaids;
    }

    public int getRelicsStolen() {
        return relicsStolen;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return id == player.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", role='" + role + '\'' +
                ", empireId=" + empireId +
                ", elo=" + elo +
                ", level=" + level +
                ", experience=" + experience +
                ", minecraftId=" + minecraftId +
                ", created=" + created +
                ", kills=" + kills +
                ", deaths=" + deaths +
                ", objectivesCompleted=" + objectivesCompleted +
                ", itemsSold=" + itemsSold +
                ", barbariansRaided=" + barbariansRaided +
                ", empiresRaided=" + empiresRaided +
                ", totalRaids=" + totalRaids +
                ", relicsStolen=" + relicsStolen +
                '}';
    }
}
