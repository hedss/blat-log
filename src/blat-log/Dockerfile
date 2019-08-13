FROM balena/open-balena-base:v8.0.2 as base

WORKDIR /usr/src/app

COPY . /usr/src/app/

# Copy and enable the service
COPY config/services /etc/systemd/system
RUN systemctl enable blat-log.service
