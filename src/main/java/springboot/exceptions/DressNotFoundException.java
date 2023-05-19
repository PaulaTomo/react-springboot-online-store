package springboot.exceptions;

import lombok.extern.slf4j.Slf4j;

import java.io.Serial;

@Slf4j
public class DressNotFoundException extends Exception {

    @Serial
    private  static final Long serialVersionUID =5033372735590934502L;

    public DressNotFoundException(String message){
        super(message);
        log.error(message);
    }
}
