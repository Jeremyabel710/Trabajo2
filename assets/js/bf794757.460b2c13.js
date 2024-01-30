"use strict";(self.webpackChunktrabajo_2_0=self.webpackChunktrabajo_2_0||[]).push([[287],{724:(a,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=n(7462),l=(n(7294),n(3905));const r={sidebar_position:4},i="Instalaci\xf3n del Facturador",o={unversionedId:"Manual_de_instalacion4",id:"Manual_de_instalacion4",isDocsHomePage:!1,title:"Instalaci\xf3n del Facturador",description:"Docker | Linux | SSL externo",source:"@site/docs/Manual_de_instalacion4.md",sourceDirName:".",slug:"/Manual_de_instalacion4",permalink:"/Trabajo2/docs/Manual_de_instalacion4",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Manual_de_instalacion4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Manual de instalaci\xf3n",permalink:"/Trabajo2/docs/Manual_de_instalacion3"}},s=[{value:"Docker | Linux | SSL externo",id:"docker--linux--ssl-externo",children:[]},{value:"Pasos",id:"pasos",children:[]}],d={toc:s},c="wrapper";function u(a){let{components:e,...n}=a;return(0,l.kt)(c,(0,t.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"instalaci\xf3n-del-facturador"},"Instalaci\xf3n del Facturador"),(0,l.kt)("h3",{id:"docker--linux--ssl-externo"},"Docker | Linux | SSL externo"),(0,l.kt)("h2",{id:"pasos"},"Pasos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'para instalar debe ejecutar el script evitando instalar el SSL, le ser\xe1 consultado en el proceso y deber\xe1 ingresar "n"'),(0,l.kt)("li",{parentName:"ul"},"finalizada la instalaci\xf3n debe dirigirse a la ruta de instalaci\xf3n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /root/facturadorpro31/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"debe editar el archivo ",(0,l.kt)("strong",{parentName:"li"},".env"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nano .env\n")),(0,l.kt)("p",null,"dentro del editor ubicar los par\xe1metros y cambiarlos"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Antes:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"APP_URL=http://${APP_URL_BASE}\nFORCE_HTTPS=false   \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Despu\xe9s:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"APP_URL=https://${APP_URL_BASE}\nFORCE_HTTPS=true\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"una vez finalizado, guarde y salga del editor"),(0,l.kt)("li",{parentName:"ul"},"ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan config:Cache\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"con eso habr\xe1 completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podr\xe1 acceder a la herramienta",(0,l.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Importante:"),"\nrecuerde habilitar el puerto 443 para poder tener acceso a la herramienta"))))))}u.isMDXComponent=!0}}]);