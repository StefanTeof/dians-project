package finki.dians.szj.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Municipality implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String placeKey;

    private String name;

    private double lon1;

    private double lat1;

    private double lon2;

    private double lat2;

    @OneToMany(mappedBy = "municipality")
    @JsonManagedReference
    private List<Hotel> hotels;

    @Override
    public String toString() {
        return "Municipality{" +
                "name='" + name + '\'' +
                '}';
    }
}
