package finki.dians.szj.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Hotel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int  id;

    private String hotelKey;

    private String name;

    private double lon;

    private double lat;

    private String formatted;

    private String stars;

    private String building;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "municipality_id")
    private Municipality municipality;

    @Transient
    private Integer municipalityId;

    public Integer getMunicipalityId() {
        if (municipality != null) {
            return municipality.getId();
        }
        return null;
    }

}
