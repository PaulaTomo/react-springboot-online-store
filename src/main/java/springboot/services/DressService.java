package springboot.services;

import springboot.exceptions.DressNotFoundException;
import springboot.models.AppDress;

import java.util.List;

public interface DressService {
    List<AppDress> findAllDresses();
    AppDress getDressById(Long dressId) throws DressNotFoundException;

}
