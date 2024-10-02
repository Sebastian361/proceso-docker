# Usa una imagen base oficial de PHP con Apache
FROM php:7.4-apache

# Copia todos los archivos de tu proyecto al directorio de Apache en el contenedor
COPY . /var/www/html/

# Instala extensiones de PHP necesarias para tu proyecto
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Expone el puerto 80 para el acceso HTTP
EXPOSE 80

# Inicia Apache en modo foreground
CMD ["apache2-foreground"]
