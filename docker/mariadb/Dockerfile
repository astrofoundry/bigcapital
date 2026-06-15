FROM mariadb:10.2

USER root
ADD my.cnf /etc/mysql/conf.d/my.cnf

# MYSQL_PASSWORD / MYSQL_ROOT_PASSWORD are provided at runtime via the stack's
# environment (and on first init only), not baked into the image.
ARG MYSQL_DATABASE=default_database
ARG MYSQL_USER=default_user

ENV MYSQL_DATABASE=$MYSQL_DATABASE
ENV MYSQL_USER=$MYSQL_USER

# Copy init sql file with env vars and then the script will substitute the variables.
COPY ./init.sql /scripts/init.template.sql
COPY ./docker-entrypoint.sh /docker-entrypoint-initdb.d/docker-initialize.sh

# The scripts in the `docker-entrypoint-initdb.d/` directory are executed as
# the mysql user inside the MySQL Docker container.
RUN chown -R mysql:root /docker-entrypoint-initdb.d
RUN chown -R mysql:root /scripts

CMD ["mysqld"]
EXPOSE 3306