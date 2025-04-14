# Práctica 3 - CI/CD con GitHub Actions

Este proyecto consiste en una aplicación web sencilla con pruebas automatizadas, cobertura de código y un pipeline de integración y despliegue continuo (CI/CD) utilizando GitHub Actions. La aplicación se despliega automáticamente a GitHub Pages.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Jest (Pruebas unitarias y de integración)
- GitHub Actions (CI/CD)
- GitHub Pages (Despliegue)

## 📁 Estructura del proyecto

Practica-3/ │ ├── src/ │ └── index.js ├── test/ │ ├── index.test.js │ └── integration.test.js ├── .github/ │ └── workflows/ │ ├── ci.yml │ └── deploy.yml ├── public/ │ └── index.html ├── package.json └── README.md

bash
Copiar
Editar

## ✅ Scripts

```bash
npm test              # Ejecuta pruebas con Jest
npm run test:coverage # Ejecuta pruebas con reporte de cobertura
npm start             # Inicia el servidor local
🧪 Pruebas
Pruebas unitarias: Validan funciones individuales.

Pruebas de integración: Verifican respuestas de rutas usando supertest.

Cobertura de código disponible con el comando npm run test:coverage.

⚙️ CI/CD Pipeline
CI: Ejecuta pruebas automáticamente al hacer push a main.

CD: Despliega a GitHub Pages si las pruebas pasan.

📦 Despliegue
La aplicación está desplegada automáticamente en GitHub Pages:

🔗 Ver aplicación en GitHub Pages

🙌 Contribuciones
Haz un fork del proyecto

Crea una rama (git checkout -b feature/tu-feature)

Haz commit de tus cambios (git commit -m 'Agrega nueva funcionalidad')

Haz push a la rama (git push origin feature/tu-feature)

Crea un Pull Request

📝 Licencia
Este proyecto está bajo la Licencia ISC.

ruby
Copiar
Editar

---

### 📄 Informe de Implementación (`INFORME.md` o como prefieras nombrarlo)

```markdown
# Informe de Implementación - Práctica 3

## 🛠️ Configuración inicial

- Se creó un repositorio en GitHub.
- Se definió una estructura básica de carpetas (`src`, `test`, `public`).
- Se implementó una aplicación Express con una ruta básica y se añadió `index.html`.

## 🧪 Implementación de pruebas

- Se configuró `Jest` y `Supertest`.
- Se crearon pruebas unitarias en `test/index.test.js`.
- Se crearon pruebas de integración en `test/integration.test.js`.
- Se habilitó el reporte de cobertura.

## 🔁 Pipeline CI/CD

- Se creó el archivo `ci.yml` para ejecutar pruebas automáticamente al hacer push o pull request a `main`.
- Se validó el correcto funcionamiento de las pruebas.
- Se añadió el despliegue automático con `actions-gh-pages` a través del archivo `deploy.yml`.

## 🚀 Despliegue

- Se desplegó el contenido de la carpeta `public/` a GitHub Pages.
- Se verificó que la aplicación sea accesible públicamente.

## 🧾 Conclusiones

- El proyecto cumple con todos los criterios de evaluación: pruebas automatizadas, integración continua y despliegue continuo.
- Se aplicaron buenas prácticas en la estructura del código, pruebas y documentación.
