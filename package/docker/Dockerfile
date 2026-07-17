FROM httpd:2.4-alpine

EXPOSE 8091
COPY package/docker/httpd.conf /usr/local/apache2/conf
COPY package/docker/systemdate.sh /usr/local/apache2/cgi-bin/systemdate
COPY package/docker/index.html /usr/local/apache2/htdocs/
COPY ui/app/images/bahmniLogoFull.png /usr/local/apache2/htdocs/bahmni-logo.png
COPY package/docker/maintenance.html /usr/local/apache2/htdocs/
COPY package/docker/unauthorized.html /usr/local/apache2/htdocs/
COPY package/docker/style.css /usr/local/apache2/htdocs/

# Copy BahmniApps
COPY ui/dist/. /usr/local/apache2/htdocs/bahmni/

# The legacy bundle stores the minified entry files at the distribution root,
# while each application's index.html resolves them from its own directory.
RUN for app in admin adt bedmanagement clinical document-upload home orders ot registration reports; do \
      for asset in /usr/local/apache2/htdocs/bahmni/${app}.min.*; do \
        [ -e "$asset" ] && cp "$asset" "/usr/local/apache2/htdocs/bahmni/${app}/"; \
      done; \
    done

# Clinical refers to these bundles by their stable filenames, whereas Grunt
# adds a content hash during the legacy distribution build. Keep stable copies
# alongside the hashed assets for those runtime references.
RUN for asset in shared.min.js shared.min.css ipd.min.js ipd.min.css next-ui.min.js next-ui.min.css; do \
      base=${asset%.*}; extension=${asset##*.}; \
      for source in /usr/local/apache2/htdocs/bahmni/micro-frontends-dist/${base}.*.${extension}; do \
        [ -e "$source" ] && cp "$source" "/usr/local/apache2/htdocs/bahmni/micro-frontends-dist/$asset"; \
      done; \
    done
