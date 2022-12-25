package finki.dians.szj.controller;


import finki.dians.szj.service.HotelService;
import finki.dians.szj.entity.Hotel;
import finki.dians.szj.entity.Municipality;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
@CrossOrigin
public class HotelController {

    @Autowired
    HotelService hotelService;

    @GetMapping("/allHotels")
    public List<Hotel> getHotels(){
        return this.hotelService.getAllHotels();
    }

    @GetMapping("/hotelsByStars")
    public List<Hotel> getHotelsByStars(@RequestParam String stars){
        return this.hotelService.getHotelsByStars(stars);
    }

    @GetMapping("/hotelsByBuilding")
    public List<Hotel> getHotelsByBuilding(@RequestParam String building){
        return this.hotelService.getHotelsByBuilding(building);
    }


    @GetMapping("/hotelsByMunicipality")
    public List<Hotel> getHotelsByMunicipality(@RequestParam Municipality municipality){
        return this.hotelService.getHotelsByMunicipality(municipality);
    }




}

