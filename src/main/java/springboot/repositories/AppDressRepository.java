package springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.models.AppDress;

public interface AppDressRepository extends JpaRepository<AppDress, Long> {
}