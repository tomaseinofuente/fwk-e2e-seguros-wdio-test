Feature: Prueba con deeplink de seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][deeplink][Happy] :: redirigir a la pantalla de cotización de SOAT con el deeplink y comprar un SOAT
    And establecemos el personality <personalityInicial>
    When utilizamos el deeplink <deeplink>
    And el usuario ingresa la placa <placa>
    And el usuario presiona el botón COTIZAR
    And se muestra la cotización con los datos del vehículo
    And se acepta los terminos y condiciones y se presiona el botón CONTINUAR COMPRA POR
    When Se muestra la pantalla de verificación de OTP se ingresa el código OTP y se presiona el botón YAPEAR SOAT POR
    Then se visualiza el winstate y se debe visualizar el monto con <numDecimales> decimales
    And el usuario debería visualizar el winstate con los datos del seguro SOAT comprado y vuelve al menú principal
    And Se debería mostrar el menú principal de yape

    Examples:
      | codigo | deeplink                          | personalityInicial                   | placa | numDecimales |
      |    002 | yape://yape.com.pe/app/soat/quote | real_main_psp_201_soat_precio_minimo |       |            2 |
