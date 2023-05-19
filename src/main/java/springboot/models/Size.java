package springboot.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "size", schema = "public")
@Entity(name = "Size")
@Cacheable
@ToString

public class Size {

    @Id
    @Column(name = "size_id")
    private int sizeId;

    @Column(name = "size_name", length = 45, unique = true, nullable = false)
    private String sizeName;
    @ManyToMany(mappedBy = "sizes")
    @JsonIgnore
    private List<AppDress> dresses;

    @Override
    public String toString() {
        return "Size{" +
                "sizeId=" + sizeId +
                ", sizeName='" + sizeName + '\'' +
                '}';


    }

}

