package br.com.superman.superman_messaging_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mainSender;

    public void sendEmail(String to, String subject, String body) {
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("no-reply@superman-messaging.com");
            message.setTo(to);
            message.setSubject(subject);
            message.setText(body);
        }catch (Exception e) {
            System.err.println("Erro ao enviar email: " + e.getMessage());
        }
    }
}
