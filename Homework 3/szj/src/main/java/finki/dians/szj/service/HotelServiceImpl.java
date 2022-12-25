package finki.dians.szj.service;

import finki.dians.szj.repository.HotelRepository;
import finki.dians.szj.entity.Hotel;
import finki.dians.szj.entity.Municipality;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService{

    @Autowired
   HotelRepository hotelRepository;

    @Override
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @Override
    public List<Hotel> getHotelsByStars(String stars) {
        return hotelRepository.findAllByStars(stars);
    }

    @Override
    public List<Hotel> getHotelsByBuilding(String building) {
        return hotelRepository.findAllByBuilding(building);
    }

    @Override
    public List<Hotel> getHotelsByMunicipality(Municipality municipality) {
        return hotelRepository.findAllByMunicipality(municipality);
    }

}
