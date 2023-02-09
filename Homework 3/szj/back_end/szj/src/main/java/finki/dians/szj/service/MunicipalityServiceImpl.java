package finki.dians.szj.service;

import finki.dians.szj.repository.MunicipalityRepository;
import finki.dians.szj.entity.Municipality;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MunicipalityServiceImpl implements MunicipalityService{

    @Autowired
    private MunicipalityRepository municipalityRepository;


    @Override
    public List<Municipality> getAllMunicipalities() {
        return municipalityRepository.findAll();
    }
}
