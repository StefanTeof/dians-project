package finki.dians.szj.repository;

import finki.dians.szj.entity.Municipality;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;



@org.springframework.stereotype.Repository
public interface MunicipalityRepository extends JpaRepository<Municipality, Integer> {

}
