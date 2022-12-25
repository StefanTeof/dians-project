package finki.dians.szj.service;

import finki.dians.szj.entity.Hotel;
import finki.dians.szj.entity.Municipality;

import java.util.List;

public interface HotelService {

    List<Hotel> getAllHotels();

    List<Hotel> getHotelsByStars(String stars);
    List<Hotel> getHotelsByBuilding(String building);
    List<Hotel> getHotelsByMunicipality(Municipality municipality);

}
