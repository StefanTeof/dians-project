package finki.dians.szj.repository;

import finki.dians.szj.entity.Hotel;
import finki.dians.szj.entity.Municipality;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


import java.util.List;

@org.springframework.stereotype.Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

    List<Hotel> findAllByStars(String stars);

    List<Hotel> findAllByBuilding(String building);

    List<Hotel> findAllByMunicipality(Municipality municipality);
}
