Feature: Pruebas happy con mocks para Comprar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Winstate][Happy] :: Comprar seguros SOAT y validar el número de <numDecimales> decimales en el monto
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    And establecemos el personality <personalitySecundario>
    And el usuario presiona el botón COTIZAR
    And se muestra la cotización con los datos del vehículo
    And se acepta los terminos y condiciones y se presiona el botón CONTINUAR COMPRA POR
    When Se muestra la pantalla de verificación de OTP se ingresa el código OTP y se presiona el botón YAPEAR SOAT POR
    Then se visualiza el winstate y se debe visualizar el monto con <numDecimales> decimales
    And el usuario debería visualizar el winstate con los datos del seguro SOAT comprado y vuelve al menú principal
    And Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial | placa | personalitySecundario                | numDecimales |
      # |    002 | real_email         |       | psp_201_soat_precio_un_decimal       |            2 |
      |    003 | real_email         |       | real_main_psp_201_soat_precio_minimo |            2 |
      # |    001 | real_email         |       | real_email                           |            0 |
