# fwk-e2e-seguros-wdio-test
Framework de automatización mobile e2e, basado en Webdriverio, para flujos de seguros 

1- Comando de ejecución

npm install

# iOS
ENV=stg npx wdio run ./config/wdio.ios.conf.ts --cucumberOpts.tagExpression='@ios or not (@android or @ios)'

# Android
ENV=stg npx wdio run ./config/wdio.android.conf.ts --cucumberOpts.tagExpression='@android or not (@android or @ios)'
