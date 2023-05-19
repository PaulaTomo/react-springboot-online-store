package springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.models.Color;

public interface AppColorRepository extends JpaRepository<Color,String> {
}
