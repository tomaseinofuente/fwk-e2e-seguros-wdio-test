Feature: Pruebas unhappy con mocks para cancelar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Cancelacion][OTP][unHappy] :: Falla técnica - MNK0040 - Cerrar
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
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos poniendo manos a la obra. Por favor, vuelve a intentarlo en unos minutos."
    And como botón "Cerrar"
    And al presionar el botón "Cerrar" se cierra el popup y se muestra la pantalla actual con los mismos datos
    And se muestra el resumen de compra

    Examples:
      | codigo | estadoSOAT | personalityInicial | personalitySecundario |
      |    001 | Comprado   | real_email         | falta definir         |
