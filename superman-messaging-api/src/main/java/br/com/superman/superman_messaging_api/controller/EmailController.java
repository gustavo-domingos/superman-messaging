package br.com.superman.superman_messaging_api.controller;

import br.com.superman.superman_messaging_api.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody Map<String, String> payload){
        try{
            String to = payload.get("to");
            String subject = payload.get("subject");
            String body = payload.get("body");

            emailService.sendEmail(to, subject, body);
            return ResponseEntity.ok("Email enviado com sucesso!");
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Erro ao enviar o email: " + e.getMessage());
        }
    }
}
