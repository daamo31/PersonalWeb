# Chuches Inventario

Gestión profesional de inventario para comercios, con soporte para Android y escritorio, cámara, OCR y reportes.

## Características principales
- Gestión de productos, ventas y stock.
- Captura de imágenes y escaneo de etiquetas con cámara (soporte Android y PC).
- OCR integrado para reconocimiento de texto en imágenes.
- Reportes exportables (Excel, CSV).
- Interfaz moderna con Kivy y KivyMD.
- Permisos robustos para cámara en Android (plyer + jnius).
- Tests unitarios y estructura profesional.

## Estructura del proyecto
```
chuches-inventario/
├── app/                # Código fuente principal
│   ├── models/         # Modelos de datos
│   ├── screens/        # Pantallas y vistas
│   ├── utils/          # Utilidades
│   ├── images/         # (vacío, imágenes ahora en assets/)
│   ├── informes/       # Logs y reportes internos
│   ├── camera.py       # Lógica de cámara y permisos
│   ├── inventory.py    # Lógica de inventario
│   ├── main.py         # Entrada principal
│   ├── main_simple.py  # Versión simple
│   └── permissions.py  # Permisos Android
├── assets/             # Recursos estáticos (imágenes, iconos)
│   ├── images/
│   └── icons/
├── tests/              # Tests unitarios y de integración
│   ├── unit/
│   └── integration/
├── requirements.txt    # Dependencias Python
├── buildozer.spec      # Configuración para Android
├── docs/               # Documentación adicional
└── README.md           # Este archivo
```

## Instalación y uso rápido

### Requisitos
- Python 3.10–3.11 recomendado
- pip
- Para Android: buildozer, Cython compatible, JDK, Android SDK/NDK

### Instalación local
```bash
pip install -r requirements.txt
python app/main.py
```

### Compilar para Android
```bash
# Instala buildozer y dependencias
pip install buildozer cython==0.29.36
buildozer android debug deploy run
```

### Ejecutar tests
```bash
pytest tests/
```

## Permisos y cámara en Android
- El sistema gestiona permisos de cámara usando plyer y jnius para máxima compatibilidad.
- Si plyer falla, se recurre a jnius y android.permissions.
- Verifica los logs en `app/informes/errores.log` para diagnósticos.

## Contribución
- Sigue la estructura de carpetas.
- Añade tests para nuevas funcionalidades.
- Documenta cambios relevantes en `docs/`.

## Licencia
MIT

---
Desarrollado por Daniel y colaboradores. Para soporte, revisa la documentación en `docs/` o abre un issue.

## Instalación en Escritorio (Windows/Mac/Linux)

1. Instala Python 3.8+ y pip.
2. Instala las dependencias:

```sh
pip install -r requirements.txt
```

3. Ejecuta la aplicación:

```sh
python src/main.py
```

## Instalación en Android (APK)

1. Instala [Buildozer](https://github.com/kivy/buildozer) y dependencias:

```sh
pip install --user buildozer cython
brew install autoconf automake libtool pkg-config
```

2. Inicializa Buildozer (solo la primera vez):

```sh
buildozer init
```

3. Asegúrate de que el archivo `buildozer.spec` esté correctamente configurado (ya incluido en este repo).

4. Conecta tu móvil Android por USB (con depuración USB activada) o usa un emulador.

5. Compila e instala el APK:

```sh
buildozer -v android debug deploy run
```

El APK se instalará automáticamente en tu móvil. El archivo generado estará en la carpeta `bin/`.

**Notas importantes para Android:**
- Todos los archivos (logs, imágenes, informes, base de datos) se guardan en el directorio privado de la app. No uses rutas relativas ni busques archivos en carpetas externas.
- Si tienes problemas de permisos de cámara o almacenamiento, revisa los permisos en el archivo `buildozer.spec` y en la configuración de tu dispositivo.
- Si la app no arranca en Android, revisa los logs con `adb logcat` y asegúrate de que todas las dependencias están incluidas en `requirements`.
- Si usas OCR, pytesseract funciona offline tras la primera ejecución.
- Si actualizas imágenes o recursos, asegúrate de copiarlos al directorio privado usando la lógica de la app.

## Funcionalidades principales

- Gestión de productos y lotes con imágenes.
- Captura de etiquetas y OCR automático/manual (solo pytesseract).
- Visualización y edición de inventario.
- Informes de ventas y exportación a Excel.
- Exportación de la base de datos a la carpeta Descargas.
- Visualización y descarga de logs de errores.
- Interfaz moderna, botones grandes y adaptada a móvil (KivyMD 1.1.1).
- Lazy loading de pantallas para arranque rápido.
- Persistencia robusta y compatible con Android.

## Requisitos

- Python 3.8+
- Android 5.0+ (API 21+) para APK
- Dependencias: kivy, kivymd==1.1.1, opencv-python, pillow, pytesseract, numpy, requests, flask, packaging, pandas

## Capturas de pantalla

A continuación se muestran ejemplos visuales de la aplicación en funcionamiento. Para una mejor experiencia, añade aquí tus propias capturas de pantalla reales tomadas desde la app en Android o escritorio.

<p align="center">
  <img src="screenshots/main_menu_android.png" alt="Menú principal (Android)" width="300"/>
  <img src="screenshots/inventory_android.png" alt="Inventario (Android)" width="300"/>
  <img src="screenshots/camera_android.png" alt="Cámara y OCR (Android)" width="300"/>
  <img src="screenshots/reports_android.png" alt="Informes (Android)" width="300"/>
</p>

> **Nota:** Para añadir tus propias capturas, simplemente guarda las imágenes en la carpeta `screenshots/` con nombres descriptivos y actualiza los nombres de archivo en el README si es necesario.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Archivos importantes del proyecto

### Para desarrollo:
- **src/**: Código fuente principal de la aplicación
- **requirements.txt**: Dependencias de Python necesarias
- **buildozer.spec**: Configuración para compilación Android
- **README.md**: Documentación del proyecto

### Archivos generados (no se suben a Git):
- **.buildozer/**: Cache y archivos temporales de Buildozer
- **bin/**: APKs compilados para Android
- **src/informes/**: Reportes Excel e informes generados
- **src/app.log**: Logs de la aplicación
- **src/inventory.db**: Base de datos SQLite local
- **__pycache__/**: Archivos compilados de Python

> **Nota:** Los archivos en `.gitignore` no se suben al repositorio para mantenerlo limpio y evitar conflictos entre desarrolladores.
