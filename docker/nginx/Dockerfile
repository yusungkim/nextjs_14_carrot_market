FROM nginx:1.25.4-alpine3.18-slim

ENV APP_ROOT /usr/src/app
ENV SERVER_NAME localhost
ENV SSL_CERTIFICATES /etc/nginx/ssl

WORKDIR $APP_ROOT

# Copy Nginx config template
COPY docker/nginx/conf.d/local.conf /tmp/docker.nginx

# Copy ssl certificates
COPY docker/nginx/ssl /etc/nginx/ssl

# 1. substitute variable references in the Nginx config template for real values from the environment
# and put the final config in its place
# 2. コンテナ内でnginxを非特権ユーザーとして実行するための設定
RUN envsubst '$APP_ROOT $SERVER_NAME $SSL_CERTIFICATES' < /tmp/docker.nginx > /etc/nginx/conf.d/default.conf \
    && mkdir -p /var/cache/nginx/client_temp \
    && mkdir -p /var/cache/nginx/proxy_temp \
    && mkdir -p /var/cache/nginx/fastcgi_temp \
    && mkdir -p /var/cache/nginx/uwsgi_temp \
    && mkdir -p /var/cache/nginx/scgi_temp \
    && chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /etc/nginx/ \
    && chmod -R 755 /etc/nginx/ \
    && chown -R nginx:nginx /var/log/nginx \
    && mkdir -p /etc/nginx/ssl/ \
    && chown -R nginx:nginx /etc/nginx/ssl/ \
    && chmod -R 755 /etc/nginx/ssl/ \
    && touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/run/nginx.pid /run/nginx.pid

USER nginx

EXPOSE 443

# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]
