# 📘 English Vocabulary Frontend (React)

Este é o **frontend em React** para consumir a API de vocabulário criada em Spring Boot.  
O objetivo é fornecer uma interface simples para **cadastrar, listar, atualizar e deletar** palavras ou frases em inglês com suas traduções, exemplos e links de referência.

---

## 🚀 Tecnologias Usadas
- [React](https://react.dev/)
- [Axios](https://axios-http.com/)
- HTML5, CSS3, JavaScript (ES6)

---

## 📂 Estrutura do Projeto

```
vocabulary-frontend/
│── src/
│   │── components/
│   │   ├── VocabularyList.jsx   # Lista de palavras/frases
│   │   ├── VocabularyForm.jsx   # Formulário de cadastro
│   │── App.jsx                  # Componente principal
│   │── api.js                   # Integração com a API
│── package.json
│── README.md
```

---

## ⚙️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/joaopauloleitecosta/vocabulary-frontend.git
cd vocabulary-frontend
npm install
```

---

## ▶️ Executando o Projeto

Para rodar o frontend em modo de desenvolvimento:

```bash
npm start
```

O app ficará disponível em:  
👉 [http://localhost:3000](http://localhost:3000)

⚠️ Certifique-se de que sua **API Spring Boot** esteja rodando em [http://localhost:8080](http://localhost:8080).

---

## 🔗 Integração com a API

O arquivo `src/api.js` contém os endpoints configurados:

```javascript
const API_URL = "http://localhost:8080/api/vocabulary";
```

Endpoints utilizados:
- **GET** `/api/vocabulary` → Lista todas as palavras/frases.
- **POST** `/api/vocabulary` → Adiciona um novo registro.
- **PUT** `/api/vocabulary/{id}` → Atualiza um registro.
- **DELETE** `/api/vocabulary/{id}` → Remove um registro.

---

## 📝 Funcionalidades

- 📌 Listar todas as palavras/frases cadastradas.  
- ➕ Adicionar novos registros.  
- 🗑️ Deletar registros existentes.  
- 🔗 Exibir link de referência (se existir).  

---

## 📷 Demonstração (Exemplo de Tela)

<p align="center">
  <img src="https://github.com/joaopauloleitecosta/vocabulary-frontend/blob/main/frontend.png" width="300" alt="Tela inicial">
</p>

---

## 📜 Licença

Este projeto é apenas para fins de estudo e aprendizado.  
Sinta-se livre para modificar e expandir! 🚀
