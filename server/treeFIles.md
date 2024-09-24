barbearia-backend/
├── config/
│   ├── db.config.js         # Configurações de conexão com MongoDB
│   ├── jwt.config.js        # Configurações para JWT
├── controllers/
│   ├── authController.js    # Lógica de autenticação e registro
│   ├── appointmentController.js # Lógica de agendamento
│   ├── barberController.js  # Lógica para gestão de barbeiros
│   ├── expenseController.js # Lógica para gestão de despesas
│   ├── serviceController.js # Lógica para gestão de serviços
│   ├── paymentController.js # Lógica para gestão de pagamentos
├── middlewares/
│   ├── authMiddleware.js    # Middleware para autenticação e autorização
│   ├── errorMiddleware.js   # Middleware para tratamento de erros
├── models/
│   ├── User.js              # Modelo para usuários
│   ├── Appointment.js       # Modelo para agendamentos
│   ├── Service.js           # Modelo para serviços
│   ├── Expense.js           # Modelo para despesas
│   ├── Payment.js           # Modelo para pagamentos
├── routes/
│   ├── authRoutes.js        # Rotas de autenticação
│   ├── appointmentRoutes.js # Rotas de agendamento
│   ├── barberRoutes.js      # Rotas de barbeiros
│   ├── expenseRoutes.js     # Rotas de despesas
│   ├── serviceRoutes.js     # Rotas de serviços
│   ├── paymentRoutes.js     # Rotas de pagamentos
├── utils/
│   ├── responseUtils.js     # Funções utilitárias para respostas HTTP
│   ├── validationUtils.js   # Funções utilitárias para validação de dados
├── .env                     # Variáveis de ambiente
├── .gitignore               # Arquivos e pastas ignoradas pelo Git
├── package.json             # Dependências e scripts do projeto
├── server.js                # Configuração do servidor Express
└── README.md                # Documentação do projeto
