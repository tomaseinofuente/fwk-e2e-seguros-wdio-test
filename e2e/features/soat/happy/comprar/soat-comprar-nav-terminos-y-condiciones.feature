Feature: Pruebas happy con mocks para Comprar seguros SOAT en Yape
En este escenario probamos la navegabilidad de la pantalla al presionar el botón terminos y condiciones deberia mostrar el webview de los terminos y condiciones del producto SOAT

  Scenario Outline: <codigo>-[SOAT][Comprar][Nav][Happy] :: Presionar el botón terminos y condiciones en la pantalla de cotización de seguro SOAT se muestra el webview de los terminos y condiciones del producto SOAT
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    And el usuario presiona el botón COTIZAR
    And se muestra la cotización con los datos del vehículo
    When el usuario visualiza la pantalla de cotización de SOAT y presiona el botón Terminos y Condiciones
    # Then el usuario visualiza el webview de terminos y condiciones de SOAT

    Examples:
      | codigo | personalityInicial | placa |
      |    001 | real_email         |       |
