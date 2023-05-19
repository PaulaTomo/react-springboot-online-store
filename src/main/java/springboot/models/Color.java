package springboot.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "color", schema = "public")
@Entity(name = "Color")
@Cacheable
@ToString

public class Color {

    @Id
    @Column(name = "color_id")
    private int colorId;

    @Column(name = "color_name", length = 45, unique = true, nullable = false)
    private String colorName;
    @ManyToMany(mappedBy = "colors")
    @JsonIgnore
    private List<AppDress> dresses;


}
