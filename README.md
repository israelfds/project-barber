# Barbearia - Sistema de Gestão de Agendamentos e Faturamento

## Descrição do Projeto

Este é um sistema de gerenciamento para uma barbearia que permite:
- **Clientes**: realizar agendamentos de cortes de cabelo com barbeiros específicos.
- **Barbeiros Afiliados**: gerenciar seus próprios agendamentos e visualizar seu faturamento.
- **Administrador**: ter controle total sobre o sistema, podendo gerenciar barbeiros, clientes, agendamentos, faturamento e despesas.

## Funcionalidades

### 1. Login
- **Cliente**: pode agendar serviços.
- **Barbeiros Afiliados**: gerenciam seus agendamentos e visualizam seu faturamento.
- **Administrador**: tem acesso completo ao sistema, incluindo faturamento e despesas.

### 2. Agendamento
- **Escolha do Barbeiro**: o cliente pode selecionar o barbeiro para o corte.
- **Escolha do Tipo de Corte**: o cliente pode selecionar o tipo de corte com preço e duração estimada.

### 3. Faturamento e Gestão
- **Faturamento por Barbeiro**: o barbeiro e o administrador podem visualizar o faturamento em períodos específicos.
- **Faturamento Total**: o administrador pode visualizar o faturamento total da barbearia.
- **Gerenciamento de Despesas**: o administrador pode adicionar, visualizar e editar despesas da barbearia.

## Tecnologias Utilizadas

### Front-end
- **React.js**: para criar uma interface de usuário dinâmica e interativa.
- **JWT**: para autenticação e controle de sessões.
- **Tailwind CSS** ou **Material-UI**: para estilização e design moderno.
- **Chart.js** ou **D3.js**: para visualização de dados (faturamento e despesas).

### Back-end
- **Node.js** com **Express.js**: para criação da API REST.
- **JWT**: para autenticação e autorização.
- **Sequelize**: ORM para interação com o banco de dados relacional.
  
### Banco de Dados
- **PostgreSQL** ou **MySQL**: para armazenar informações de usuários, agendamentos, serviços, despesas e faturamento.

## Estrutura do Banco de Dados

- **users**: Tabela para armazenar informações de clientes, barbeiros e administradores.
- **appointments**: Tabela para armazenar os agendamentos de cortes de cabelo.
- **services**: Tabela que contém os tipos de cortes com preços e duração.
- **expenses**: Tabela para gerenciar as despesas da barbearia.
- **payments**: Tabela para registrar os pagamentos e faturamento.

## Design da Arquitetura

### Front-end
- Página de login para clientes, barbeiros e administradores.
- Dashboard do administrador para visualizar faturamento e gerenciar barbeiros e clientes.
- Página de agendamento para clientes escolherem barbeiros e serviços.
- Página de gerenciamento de agendamentos e faturamento para barbeiros.

### Back-end
#### Principais Endpoints:
- **POST** `/login`: Autenticar usuários (cliente, barbeiro ou administrador).
- **GET** `/barbers`: Listar barbeiros disponíveis.
- **POST** `/appointments`: Agendar um serviço.
- **GET** `/appointments`: Visualizar agendamentos do usuário.
- **GET** `/barbers/{id}/earnings`: Ver faturamento de um barbeiro específico.
- **GET** `/barbershop/earnings`: Ver faturamento total da barbearia.
- **POST** `/expenses`: Adicionar uma despesa.
- **GET** `/expenses`: Listar despesas.

## Como Executar o Projeto

### Requisitos
- Node.js >= 14.x
- PostgreSQL ou MySQL
- Yarn ou NPM

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/israelfds/project-barber
2. Navegue até o diretório do projeto:
   ```bash
   cd project-barber

3. Execute o projeto com Docker:
   ```bash
   docker-compose up --build -d   


