Feature: Pruebas happy con mocks para Cotizar seguros SOAT en Yape
En este escenario probamos la navegabilidad de la pantalla al presionar el botón reenviar deberia generar un nuevo codigo otp

  Scenario Outline: <codigo>-[SOAT][Cotizar][Nav][Happy] :: Presionar el botón reenviar en la pantalla de confirmacion de otp de seguro SOAT deberia generar un nuevo codigo otp
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    And el usuario presiona el botón COTIZAR
    And se muestra la cotización con los datos del vehículo
    And se acepta los terminos y condiciones y se presiona el botón CONTINUAR COMPRA POR
    When el usuario visualiza la pantalla de verificación de OTP de SOAT y presiona el botón Reenviar código
    # Then Se debe generar un nuevo código otp

    Examples:
      | codigo | personalityInicial | placa |
      |    001 | real_email         |       |
