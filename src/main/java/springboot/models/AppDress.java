package springboot.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Builder
@AllArgsConstructor
@Table(name = "app_dress", schema = "public")
@Entity(name = "AppDress")


public class AppDress {

    @Column(name = "dress_name", length = 65, nullable = false)
    private String nameDress;

    @Column(name = "price", length = 65, nullable = false)
    private BigDecimal price;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "app_dress_seq")
    @SequenceGenerator(name = "app_dress_seq", allocationSize = 1)
    @Column(name = "dress_id", columnDefinition = "BIGINT DEFAULT NEXTVAL('app_dress_seq') UNIQUE")
    private int dressId;


    @ManyToMany(targetEntity = Color.class, fetch = FetchType.EAGER)
    @JoinTable(
            name = "app_dress_color",
            joinColumns = @JoinColumn(name = "dress_id"),
            inverseJoinColumns = @JoinColumn(name = "color_id")
    )
    private List<Color> colors;

    @ManyToMany(targetEntity = Size.class, fetch = FetchType.EAGER)
    @JoinTable(
            name = "app_dress_size",
            joinColumns = @JoinColumn(name = "dress_id"),
            inverseJoinColumns = @JoinColumn(name = "size_id")
    )

    private List<Size> sizes;


}
