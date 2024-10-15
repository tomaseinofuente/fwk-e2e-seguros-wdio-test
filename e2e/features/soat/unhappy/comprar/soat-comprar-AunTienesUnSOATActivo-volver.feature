Feature: Pruebas unhappy con mocks para Comprar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Comprar][UnHappy] :: Comprar un seguro SOAT, para un SOAT activo, cuando la fecha de activación sea dentro de 90 días y presionar Volver
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    And el usuario presiona el botón COTIZAR
    And se muestra la cotización con los datos del vehículo
    And establecemos el personality <personalitySecundario>
    And se acepta los terminos y condiciones y se presiona el botón CONTINUAR COMPRA POR
    Then Se debería mostrar el modal con el título "Aún tienes un SOAT activo"
    And como mensaje "Si compras uno nuevo, este se activará inmediatamente al terminar la vigencia del actual. Así, te evitas preocupaciones."
    And como botones "Volver" y "Continuar compra"
    And al presionar el botón "Volver" se cierra el popup y se muestra la pantalla actual con los mismos datos

    Examples:
      | codigo | personalityInicial | personalitySecundario             |placa |
      |    001 | real_email         | psp_201_soat_effective_in_91_days |      |
