# Etapa 1: Construir o aplicativo
FROM node:18-alpine AS build

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código da aplicação para o diretório de trabalho
COPY . .

# Construir o aplicativo para produção
RUN npm run build

# Etapa 2: Servir o aplicativo estático
FROM nginx:stable-alpine

# Copiar os arquivos estáticos do build da etapa anterior para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiar arquivo de configuração customizado do Nginx (se necessário)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80 para acessar o app
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
