---
sidebar_position: 4
---

# Instalación del Facturador

### Docker | Linux | SSL externo

## Pasos

- para instalar debe ejecutar el script evitando instalar el SSL, le será consultado en el proceso y deberá ingresar "n"
- finalizada la instalación debe dirigirse a la ruta de instalación
```shell
cd /root/facturadorpro31/
```
- debe editar el archivo **.env**
```shell
nano .env
``` 
dentro del editor ubicar los parámetros y cambiarlos

**Antes:**
```shell
APP_URL=http://${APP_URL_BASE}
FORCE_HTTPS=false   
```

**Después:**
```shell
APP_URL=https://${APP_URL_BASE}
FORCE_HTTPS=true
```


- una vez finalizado, guarde y salga del editor
- ejecute los siguientes comandos para eliminar la caché de la aplicación
```shell
php artisan config:Cache
```
- con eso habrá completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podrá acceder a la herramienta
:::warning
**Importante:**
recuerde habilitar el puerto 443 para poder tener acceso a la herramienta
:::