FROM mariadb:11.4

USER root
ADD my.cnf /etc/mysql/conf.d/my.cnf

# MYSQL_DATABASE, MYSQL_USER, and both passwords come from the stack's
# environment at runtime. The image sets no defaults: the entrypoint connects to
# MYSQL_DATABASE on every upgrade, and a default naming no database stops it.

# Copy init sql file with env vars and then the script will substitute the variables.
COPY ./init.sql /scripts/init.template.sql
COPY ./docker-entrypoint.sh /docker-entrypoint-initdb.d/docker-initialize.sh

# The scripts in the `docker-entrypoint-initdb.d/` directory are executed as
# the mysql user inside the MySQL Docker container.
RUN chown -R mysql:root /docker-entrypoint-initdb.d
RUN chown -R mysql:root /scripts

CMD ["mariadbd"]
EXPOSE 3306