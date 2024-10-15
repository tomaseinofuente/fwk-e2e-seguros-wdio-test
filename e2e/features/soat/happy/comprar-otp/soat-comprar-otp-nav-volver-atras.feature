Feature: Pruebas happy con mocks para Cotizar seguros SOAT en Yape
En este escenario probamos la navegabilidad de la pantalla al presionar el botón atras deberia mostrar el menú principal de yape

  Scenario Outline: <codigo>-[SOAT][Cotizar][Nav][Happy] :: Presionar el botón atras en la pantalla de cotización de seguro SOAT se muestra el menú principal de yape
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    And el usuario presiona el botón COTIZAR
    And se muestra la cotización con los datos del vehículo
    And se acepta los terminos y condiciones y se presiona el botón CONTINUAR COMPRA POR
    When el usuario visualiza la pantalla de verificación de OTP de SOAT y presiona el botón <-
    And se muestra la cotización con los datos del vehículo

    Examples:
      | codigo | personalityInicial | placa |
      |    001 | real_email         |       |
