Feature: Pruebas unhappy con mocks para cancelar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Cancelacion][OTP][unHappy] :: Cancelación luego de 15 días de compra de poliza - YPINS0013 - Llamar a Pacífico
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And se selecciona un SOAT <estadoSOAT>
    And se muestra el resumen de compra
    And en el resumen de compra presionamos el botón "Cancelar seguro"
    And en la Confirmación de cancelación presionamos el botón "Continuar cancelación"
    And en la validación de OTP de cancelación de SOAT se debe autocompletar el código OTP
    And establecemos el personality <personalitySecundario>
    When en la validación de OTP de cancelación de SOAT se presiona el botón "Confirmar solicitud"
    Then Se debería mostrar el modal con el título "Continúa tu cancelación llamando a Pacífico"
    And como mensaje "Han pasado más de 15 días de haber comprado tu seguro. Para cancelar tu SOAT llama a Pacífico al 513-5000, opción 4."
    And como botones "Llamar a pacífico" y "Ir a inicio"
    And al presionar el botón "Llamar a pacífico" se abre el aplicativo de llamadas con el numero telefónico "01 5135000"

    Examples:
      | codigo | estadoSOAT | personalityInicial | personalitySecundario |
      |    001 | Comprado   | real_email         | falta definir         |
