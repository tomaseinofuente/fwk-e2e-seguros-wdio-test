Feature: Pruebas unhappy con mocks para Cotizar seguros SOAT en Yape

  @android
  Scenario Outline: <codigo>-[SOAT][Cotizar][UnHappy] :: Error De Datos Al Cotizar seguros SOAT En Pacifico - MNK0007 - y presionar Validar placa
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    When el usuario presiona el botón COTIZAR
    # Then Se debería mostrar el modal con el título "Completa tus datos en la web de Pacífico"
    # falta la palabra de en "web de pacífico"
    Then Se debería mostrar el modal con el título "Completa tus datos en la web Pacífico"
    And como mensaje "Termina de ingresar los datos de tu vehículo en la web de Pacífico. También puedes validar si el número de placa es correcto."
    And como botones "Ir a la web de Pacífico" y "Validar placa"
    And al presionar el botón "Validar placa" se cierra el popup y se muestra la pantalla actual con los mismos datos

    Examples:
      | codigo | personalityInicial                    | placa |
      |    001 | psp_422_license_plate_invalid_partial |       |

  @ios
  Scenario Outline: <codigo>-[SOAT][Cotizar][UnHappy] :: Error De Datos Al Cotizar seguros SOAT En Pacifico - MNK0007 - y presionar Validar placa
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    When el usuario presiona el botón COTIZAR
    # Then Se debería mostrar el modal con el título "Completa tus datos en la web de Pacífico"
    # falta la palabra de en "web de pacífico"
    Then Se debería mostrar el modal con el título "Completa tus datos en la web Pacífico"
    And como mensaje "Termina de ingresar los datos de tu vehículo en la web de Pacífico. También puedes validar si el número de placa es correcto."
    And como botones "Ir a la web Pacífico" y "Validar placa"
    And al presionar el botón "Validar placa" se cierra el popup y se muestra la pantalla actual con los mismos datos

    Examples:
      | codigo | personalityInicial                    | placa |
      |    001 | psp_422_license_plate_invalid_partial |       |
