package web.ecommerce.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.ModelAndView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(Exception.class)
    public ModelAndView handleAllExceptions(Exception ex, HttpServletRequest request) {
        logger.error("GlobalExceptionHandler caught exception for URI: {}", request.getRequestURI(), ex);
        ModelAndView mav = new ModelAndView("error");
        mav.addObject("status", 500);
        if (ex instanceof MaxUploadSizeExceededException || ex.getMessage().contains("SizeLimitExceeded") || ex.getMessage().contains("413") || ex.getMessage().toLowerCase().contains("too large")) {
            mav.addObject("status", 413);
        }
        return mav;
    }
}
