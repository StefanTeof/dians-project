package finki.dians.szj.repository;

import finki.dians.szj.entity.Hotel;
import finki.dians.szj.entity.Municipality;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.List;

@org.springframework.stereotype.Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

    //List<Hotel> findAllByMunicipalityAndStarsInAndBuildingIn(Municipality municipality, List<String> stars, List<String> buildings);
}
