# peoplesLibrary

git clone https://github.com/TheAnitej/peoplesLibrary.git
cd peoplesLibrary

#backendSetup
cd applicationstarter
mvn clean install  

<!-- services -->
spring.mail.host=smtp.yourprovider.com  
spring.mail.username=your-email@example.com  
spring.mail.password=your-password  
spring.mail.port=587  
spring.mail.protocol=smtp  
spring.mail.properties.mail.smtp.auth=true  
spring.mail.properties.mail.smtp.starttls.enable=true  

#replace relavent details with your own

<!-- run backend -->
mvn spring-boot:run  


#frotend Setup

cd frontend  
npm install  
npm install bootstrap  

<!-- Add the following in angular.json under styles: -->
"node_modules/bootstrap/dist/css/bootstrap.min.css"  

npm install primeng  
npm install primeicons  

<!-- Add PrimeNG styles in angular.json under styles: -->
"node_modules/primeng/resources/themes/saga-blue/theme.css",  
"node_modules/primeng/resources/primeng.min.css",  
"node_modules/primeicons/primeicons.css"  

ng add @angular/material  
ng serve  

<!-- for db we will be using mongoDd and run it in local -->

