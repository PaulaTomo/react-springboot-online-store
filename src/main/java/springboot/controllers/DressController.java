package springboot.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import springboot.exceptions.DressNotFoundException;
import springboot.models.AppDress;
import springboot.services.DressService;


import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/dresses")

public class DressController {
    @Autowired
    private DressService dressService;

    @Autowired
    public DressController(DressService dressService) {
        this.dressService = dressService;
    }

    @GetMapping
    public ResponseEntity<List<AppDress>> findAllDresses(Model model) {
        List<AppDress> dresses = dressService.findAllDresses();
        model.addAttribute("dressList", dresses);
        return ResponseEntity.ok(dresses);
    }
    @GetMapping("/{id}")
    public ResponseEntity<AppDress> getDressById(@PathVariable Long id) throws DressNotFoundException {
        AppDress dress = dressService.getDressById(id);
        if (dress != null) {
            return ResponseEntity.ok(dress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}




