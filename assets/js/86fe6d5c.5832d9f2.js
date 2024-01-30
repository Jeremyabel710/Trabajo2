"use strict";(self.webpackChunktrabajo_2_0=self.webpackChunktrabajo_2_0||[]).push([[395],{2148:(e,a,l)=>{l.r(a),l.d(a,{contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=l(7462),t=(l(7294),l(3905));const r={sidebar_position:3},s="Manual de instalaci\xf3n",o={unversionedId:"Manual_de_instalacion3",id:"Manual_de_instalacion3",isDocsHomePage:!1,title:"Manual de instalaci\xf3n",description:"Linux | Valet",source:"@site/docs/Manual_de_instalacion3.md",sourceDirName:".",slug:"/Manual_de_instalacion3",permalink:"/Trabajo2/docs/Manual_de_instalacion3",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Manual_de_instalacion3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manual de Instalaci\xf3n",permalink:"/Trabajo2/docs/Manual_de_instalacion2"},next:{title:"Instalaci\xf3n del Facturador",permalink:"/Trabajo2/docs/Manual_de_instalacion4"}},p=[{value:"Linux | Valet",id:"linux--valet",children:[]},{value:"Pasos",id:"pasos",children:[]}],i={toc:p},c="wrapper";function u(e){let{components:a,...l}=e;return(0,t.kt)(c,(0,n.Z)({},i,l,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"manual-de-instalaci\xf3n"},"Manual de instalaci\xf3n"),(0,t.kt)("h3",{id:"linux--valet"},"Linux | Valet"),(0,t.kt)("h2",{id:"pasos"},"Pasos"),(0,t.kt)("p",null,"Si desea implementar sobre un servidor local Linux \u201cdesde cero\u201d debe:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Contar con acceso root"),(0,t.kt)("li",{parentName:"ul"},"Instalar php 7.2 y todas las librer\xedas requeridas por el aplicativo y Laravel"),(0,t.kt)("li",{parentName:"ul"},"Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos"),(0,t.kt)("li",{parentName:"ul"},"Instalar Git, Curl, Composer")),(0,t.kt)("p",null,"Ubuntu no cuenta con la versi\xf3n 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalaci\xf3n, ellos son"),(0,t.kt)("p",null,"Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\n")),(0,t.kt)("p",null,"Para poder agregar un PPA, ejecute los siguientes:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install software-properties-common\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install python-software-properties\n")),(0,t.kt)("p",null,"Para agregar el PPA, en algunos casos solicitar\xe1 confirmar con enter"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"add-apt-repository ppa:ondrej/php\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\n")),(0,t.kt)("p",null,"Procedemos a Instalar PHP, aunque se instalar algunas librer\xedas junto con PHP, se agregan para asegurar la instalaci\xf3n"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt\n")),(0,t.kt)("p",null,"Instalamos Mysql, phpmyadmin opcional"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin\n")),(0,t.kt)("p",null,"Se le solicitara contrase\xf1a dos veces, con su confirmaci\xf3n, tanto para mysql como para phpmyadmin"),(0,t.kt)("p",null,"Instalamos Curl y Git"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install git\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install curl\n")),(0,t.kt)("p",null,"Luego se procede a instalar Composer"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install composer\n")),(0,t.kt)("p",null,"Dar permisos de lectura y escritura a la carpeta composer"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"Chmod \u2013R 777 ~/.composer\n")),(0,t.kt)("p",null,"Instalar librerias cpriego de Valet"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"composer global require cpriego/valet-linux\n")),(0,t.kt)("p",null,"Ir a carpeta home /.profile y a\xf1adir la siguiente linea al final del documento y guardar"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"Nano ~/.profile\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"PATH= \u201cHOME/.composer/vendor/bin:$PATH\u201d\n")),(0,t.kt)("p",null,"Luego ejecutar en terminal:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.profile\n")),(0,t.kt)("p",null,"Instalar las siguientes librer\xedas"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"apt install network-maneger libnss3-tools jq xsel\n")),(0,t.kt)("p",null,"Ya en este punto el sistema se encuentra listo para instalar Valet pero antes debe asegurarse de tener libre el puerto :80 . Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto."),(0,t.kt)("p",null,"Detener servicios de apache2 si lo tienes instalado."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"services apache2 stop\n")),(0,t.kt)("p",null,"Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"Apt install nginx\n")),(0,t.kt)("p",null,"Verificar que el servidor de nginx se est\xe1 ejecutando correctamente"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"Systemctl status nginx\n")),(0,t.kt)("p",null,"Si todo est\xe1 ok instalar valet"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"Valet install\n")),(0,t.kt)("p",null,"Con valet podemos tener nuestro c\xf3digo en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"Mkdir ~/code\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"cd code\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"valet park\n")),(0,t.kt)("p",null,"Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://gitlab.com/b.mendoza/facturadorpro3.git\n")),(0,t.kt)("p",null,"Esto crear\xe1 una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con cd facturadorpro3, dentro de ella puede ejecutar lo siguiente para configurar el archivo .env"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"cp .env.example .env\n")),(0,t.kt)("p",null,"Donde APP_URL_BASE corresponde a su dominio, DB_DATABASE ser\xe1 el nombre que le de a la base de datos principal, DB_USERNAME y DB_PASSWORD equivalen al usuario creado anteriormente en la instalaci\xf3n de mysql."),(0,t.kt)("p",null,"Seguidamente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan key:generate\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"composer dump-autoload\n")),(0,t.kt)("p",null,"Luego deber\xe1 registrar la base de datos mediante phpmyadmin, accediendo a la ruta sudominio.com/phpmyadmin con el usuario root y contrase\xf1a agregada en la instalaci\xf3n."),(0,t.kt)("p",null,"Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"composer install\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate --seed\n")),(0,t.kt)("p",null,"Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrar\xe1 la base de datos creada y la derecha las tablas generadas."),(0,t.kt)("p",null,"Con estos pasos podr\xe1 observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"chmod -R 755 storage\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"chmod -R 755 bootstrap/cache\n")),(0,t.kt)("p",null,"Tambi\xe9n es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan storage:link\n")),(0,t.kt)("p",null,"Si todo se realiz\xf3 correctamente, ya tendr\xe1 las tablas del usuario principal creadas, y podr\xe1 acceder mediante la web, al proyecto.\nAccesos:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"Facturadorpro3.test\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"usuario: admin@gmail.com\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"contrase\xf1a: 123456\n")))}u.isMDXComponent=!0}}]);