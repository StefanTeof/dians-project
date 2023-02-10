package finki.dians.szj.controller;

import finki.dians.szj.entity.Hotel;
import finki.dians.szj.entity.Municipality;
import finki.dians.szj.service.HotelService;
import finki.dians.szj.service.MunicipalityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FilterController {

    @Autowired
    private HotelService hotelService;

    @Autowired
    private MunicipalityService municipalityService;


    @GetMapping("/municipalities")
    public List<Municipality> getMunicipalities(){
        return municipalityService.getAllMunicipalities();
    }

//    @GetMapping("/filtered-data")
//    public List<Hotel> getFilteredData(@RequestParam (required = false) Municipality municipality,
//                                       @RequestParam (required = false) List<String> ratings,
//                                       @RequestParam (required = false) List<String> buildings){
//
//
//        return hotelService.getHotelsByAllParams(municipality, ratings, buildings);
//    }

    @GetMapping("/hotels")
    public List<Hotel> getHotels(){
        return hotelService.getAllHotels();
    }
}
