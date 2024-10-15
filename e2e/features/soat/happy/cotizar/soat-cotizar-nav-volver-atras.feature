Feature: Pruebas happy con mocks para Cotizar seguros SOAT en Yape
En este escenario probamos la navegabilidad de la pantalla al presionar el botón atras deberia mostrar el menú principal de yape

  Scenario Outline: <codigo>-[SOAT][Cotizar][Nav][Happy] :: Presionar el botón atras en la pantalla de cotización de seguro SOAT se muestra el menú principal de yape
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    When el usuario visualiza la pantalla de cotización de SOAT y presiona el botón <-
    Then Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial |
      |    001 | real_email         |
