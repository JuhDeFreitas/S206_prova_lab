# S206 — Prova de Laboratório (GoRest)

Automação de testes da API GoRest utilizando Postman, Newman e relatório HTML.

---

## 🔧 Pré-requisitos

Instale os pacotes necessários globalmente:

```bash
npm install -g newman
npm install -g newman-reporter-htmlextra
```

### Executar Localmente:
````bash
 newman run "Prova S206 - GoRest.postman_collection.json" \ -e "GoRest.postman_environment.json"
````
### GerarRelatório HTML

```bash
newman run "Prova S206 - GoRest.postman_collection.json" \ -e "GoRest.postman_environment.json" \ -r htmlextra \ --reporter-htmlextra-export report.html
```
O relatório será salvo como report.html no diretório atual.



<img width="413" height="516" alt="image" src="https://github.com/user-attachments/assets/8b007f05-5462-43d9-b2f4-36d863833431" />





