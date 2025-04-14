# Practica 3

Proyecto de ejemplo para pruebas automatizadas y despliegue continuo usando GitHub Actions y GitHub Pages.

## 📦 Instalación

```bash
npm install
🚀 Scripts
npm start: Ejecuta la aplicación

npm test: Ejecuta pruebas unitarias

npm run test:coverage: Muestra cobertura de código

🧪 Pruebas
Las pruebas están implementadas con Jest. Hay pruebas unitarias y una prueba de integración.

🔁 CI/CD
El proyecto tiene un pipeline con GitHub Actions para:

Instalar dependencias

Ejecutar pruebas automatizadas

Desplegar la app a GitHub Pages

🌐 GitHub Pages
El sitio se despliega automáticamente desde la carpeta /public al hacer push en main.

➡️ Ir al sitio publicado

🤝 Contribuir
Ver CONTRIBUTING.md

yaml
Copiar
Editar

---

### 📄 `CONTRIBUTING.md`

```md
# Guía de Contribución

Gracias por tu interés en contribuir a este proyecto.

## 📋 Requisitos

- Node.js 20+
- Jest

## 🛠 Cómo contribuir

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Agrega tus cambios
4. Asegúrate de que todas las pruebas pasen (`npm test`)
5. Haz un commit y push (`git push origin feature/nueva-funcionalidad`)
6. Abre un Pull Request