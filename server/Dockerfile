# Usa uma imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e o package-lock.json (se houver)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install 

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Expõe a porta que o aplicativo usa (ajuste conforme necessário)
EXPOSE 4000

# Comando para rodar a aplicação
CMD ["npm", "start"]
