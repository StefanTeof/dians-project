package finki.dians.szj.service;

import finki.dians.szj.entity.Hotel;
import finki.dians.szj.entity.Municipality;

import java.util.List;

public interface HotelService {

    List<Hotel> getAllHotels();

    //List<Hotel> getHotelsByAllParams(Municipality municipality, List<String> stars, List<String> buildings);

}
