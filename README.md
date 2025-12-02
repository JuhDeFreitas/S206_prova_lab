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
 newman run "Prova S206 - GoRest.postman_collection.json" \
     -e "GoRest.postman_environment.json"
````
### GerarRelatório HTMLde 

```bash
newman run "Prova S206 - GoRest.postman_collection.json" \
     -e "GoRest.postman_environment.json" \
     -r htmlextra \
     --reporter-htmlextra-export report.html
```
O relatório será salvo como report.html no diretório atual.


## Relatório de Testes rodando direto no VS Code
<img width="413" height="516" alt="image" src="https://github.com/user-attachments/assets/5df01e92-06aa-4bd1-b704-18c62379519d" />


## Relatório de Testes com HTML

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/14386281-9f0b-4a83-b15e-3d6687993650" />






