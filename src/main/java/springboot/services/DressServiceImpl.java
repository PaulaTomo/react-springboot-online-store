package springboot.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import springboot.exceptions.DressNotFoundException;
import springboot.models.AppDress;
import springboot.repositories.AppDressRepository;

import java.util.List;
@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = {Exception.class, DressNotFoundException.class})

public class DressServiceImpl implements DressService{

    private final AppDressRepository appDressRepository;
@Override
    public List<AppDress> findAllDresses() {
        return appDressRepository.findAll();
    }

    @Override
    public AppDress getDressById(Long id) throws DressNotFoundException {
        log.info("Trying to getDressById with param: id = {}", id);

        return this.appDressRepository.findById(id).orElseThrow(() -> new DressNotFoundException("Dress not found"));
    }

}
