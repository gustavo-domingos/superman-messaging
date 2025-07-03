# Superman-Messaging

Um projeto simples de mensageria para envio de e-mails, construído com uma API em Spring Boot, uma UI em React e totalmente containerizado com Docker.

## Tecnologias Utilizadas

- Backend: Spring Boot, Java 17, Maven, Spring Web, Java Mail Sender
- Frontend: React, JavaScript, HTML/CSS
- Deployment: Docker, Docker Compose, Nginx

## Pré-requisitos

- [Java 17+](https://www.oracle.com/java/technologies/downloads/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Como Executar o Projeto

1.  Clone o repositório:
    bash
    git clone [https://github.com/SEU-USUARIO/superman-messaging.git](https://github.com/SEU-USUARIO/superman-messaging.git)
    cd superman-messaging
    

2.  Configuração de Ambiente:
    Este projeto usa um arquivo `.env` para gerenciar as credenciais do servidor de e-mail. Crie um arquivo chamado `.env` na raiz do projeto, usando o `.env.example` como modelo.

    `.env.example`:
    
    SPRING_MAIL_USERNAME=seu-usuario-smtp
    SPRING_MAIL_PASSWORD=sua-senha-smtp
    

3.  Suba os containers com Docker Compose:
    bash
    docker-compose up --build
    
4.  Acesse a aplicação:
    - O frontend estará disponível em `http://localhost:3000`
    - A API estará disponível em `http://localhost:8080`

## Estrutura do Projeto
superman-messaging/
├── superman-messaging-api/   # Backend Spring Boot
├── superman-messaging-ui/    # Frontend React
├── .gitignore                # Arquivos ignorados pelo Git
├── docker-compose.yml        # Orquestrador dos containers
└── README.md                 # Documentação do projeto