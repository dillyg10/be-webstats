package com.blockempires.webstats.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This controller attempts to redirect all requests to the /index path, except for valid requests.
 * This means that /api calls are not interupted, nor are resource calls.
 */
@Controller
public class BaseController implements ErrorController {

    // This defines our internal /error path that will be reached when a 404 occurs
    private static final String PATH = "/error";

    /**
     * This maps all requests to /error back to the index, the web app itself knows its routes and handles 404s
     * @return Index page
     */
    @RequestMapping(value = PATH)
    public String error() {
        return "forward:/index.html";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
}