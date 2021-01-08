package com.blockempires.webstats.components;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * This represents an Empire object.
 *
 * Players can have up to one empire, and empires contain multiple players.
 */
@Entity
public class Empire {
    @Id
    @GeneratedValue
    private long Id;

    private String name;
    private String displayName;

    /**
     * This is an object that is calculated ingame and represented as a base64 image string
     */
    @Lob
    private String banner;

    private LocalDateTime created;

    private int tier;
    private int level;
    private int elo;
    private int relics;

    private int timesRaided;
    private int structuresDestroyed;
    private int structuresRepaired;
    private int relicsCaptured;
    private int relicsReturned;
    private int objectivesCompleted;


    protected Empire(){}

    public Empire(String name, String displayName, String banner, int tier, int level, int elo, int relics, int relicsReturned, int timesRaided, int structuresDestroyed, int structuresRepaired, int relicsCaptured, int objectivesCompleted) {
        this.name = name;
        this.displayName = displayName;
        this.banner = banner;
        this.tier = tier;
        this.level = level;
        this.elo = elo;
        this.timesRaided = timesRaided;
        this.structuresDestroyed = structuresDestroyed;
        this.structuresRepaired = structuresRepaired;
        this.relicsCaptured = relicsCaptured;
        this.relicsReturned = relicsReturned;
        this.objectivesCompleted = objectivesCompleted;
        this.relics = relics;
        this.created = LocalDateTime.now();
    }

    public long getId() {
        return Id;
    }

    public String getName() {
        return name;
    }

    public String getDisplayName() {
        return displayName;
    }

    public String getBanner() {
        return banner;
    }

    public int getTier() {
        return tier;
    }

    public int getLevel() {
        return level;
    }

    public int getElo() {
        return elo;
    }

    public int getTimesRaided() {
        return timesRaided;
    }

    public int getStructuresDestroyed() {
        return structuresDestroyed;
    }

    public int getStructuresRepaired() {
        return structuresRepaired;
    }

    public int getRelics() {
        return relics;
    }

    public int getRelicsCaptured() {
        return relicsCaptured;
    }

    public int getRelicsReturned() {
        return relicsReturned;
    }

    public int getObjectivesCompleted() {
        return objectivesCompleted;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Empire empire = (Empire) o;
        return Id == empire.Id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(Id);
    }

    @Override
    public String toString() {
        return "Empire{" +
                "id=" + Id +
                ", name='" + name + '\'' +
                ", displayName='" + displayName + '\'' +
                ", banner='" + banner + '\'' +
                ", tier=" + tier +
                ", level=" + level +
                ", elo=" + elo +
                ", relics=" + relics +
                ", timesRaided=" + timesRaided +
                ", structuresDestroyed=" + structuresDestroyed +
                ", structuresRepaired=" + structuresRepaired +
                ", relicsCaptured=" + relicsCaptured +
                ", objectivesCompleted=" + objectivesCompleted +
                '}';
    }
}
