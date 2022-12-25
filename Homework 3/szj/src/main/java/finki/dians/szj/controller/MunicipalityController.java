package finki.dians.szj.controller;

import finki.dians.szj.entity.Municipality;
import finki.dians.szj.service.MunicipalityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/municipalities")
@CrossOrigin
public class MunicipalityController {

    @Autowired
    MunicipalityServiceImpl municipalityService;

    @GetMapping("/allMunicipalities")
    public List<Municipality> getAllMunicipalities(){
        return municipalityService.getAllMunicipalities();
    }
}
