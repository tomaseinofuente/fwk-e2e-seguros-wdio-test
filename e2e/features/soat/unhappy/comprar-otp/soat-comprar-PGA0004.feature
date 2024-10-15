Feature: Pruebas unhappy con mocks para Comprar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Comprar][UnHappy] :: Error De Datos Al Comprar seguros SOAT En Pacifico - PGA0004
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    And el usuario presiona el botón COTIZAR
    And se muestra la cotización con los datos del vehículo
    And establecemos el personality <personalitySecundario>
    And se acepta los terminos y condiciones y se presiona el botón CONTINUAR COMPRA POR
    When Se muestra la pantalla de verificación de OTP se ingresa el código OTP y se presiona el botón YAPEAR SOAT POR
    Then Se debería mostrar el modal con el título "No se realizó la compra"
    And como mensaje "Lamentamos este inconveniente. En breve te estaremos devolviendo tu dinero y podrás revisarlo en tus movimientos."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial                   | personalitySecundario             | placa |
      |    001 | real_main_psp_201_soat_precio_minimo | psp_422_system_request_id_invalid |       |
