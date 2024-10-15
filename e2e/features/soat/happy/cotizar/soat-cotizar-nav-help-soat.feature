Feature: Pruebas happy con mocks para Cotizar seguros SOAT en Yape
En este escenario probamos la navegabilidad de la pantalla al presionar el botón ayuda (imagen de icono de auriculares) deberia mostrar el webview de sobre el producto SOAT

  Scenario Outline: <codigo>-[SOAT][Cotizar][Nav][Happy] :: Presionar el botón ayuda en la pantalla de cotización de seguro SOAT se muestra el webview de sobre el producto SOAT
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    When el usuario visualiza la pantalla de cotización de SOAT y presiona el botón con ícono de auriculares
    # Then Se debería mostrar el webview sobre el producto SOAT

    Examples:
      | codigo | personalityInicial |
      |    001 | real_email         |
