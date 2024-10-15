Feature: Pruebas unhappy con mocks para Cotizar seguros SOAT en Yape

  @android
  Scenario Outline: <codigo>-[SOAT][Cotizar][UnHappy] :: Error De Datos Al Cotizar seguros SOAT En Pacifico - MNK0001 - y presionar Ir a la web Pacífico
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    When el usuario presiona el botón COTIZAR
    Then Se debería mostrar el modal con el título "Completa tus datos en la web Pacífico"
    And como mensaje "Termina de ingresar los datos de tu vehículo en la web de Pacífico. También puedes validar si el número de placa es correcto."
    And como botones "Ir a la web de Pacífico" y "Validar placa"
    And al presionar el botón "Ir a la web de Pacífico" se debe ir a la webview de Pacífico

    Examples:
      | codigo | personalityInicial           | placa |
      |    001 | psp_422_license_plate_format |       |

  @ios
  Scenario Outline: <codigo>-[SOAT][Cotizar][UnHappy] :: Error De Datos Al Cotizar seguros SOAT En Pacifico - MNK0001 - y presionar Ir a la web Pacífico
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    When el usuario presiona el botón COTIZAR
    Then Se debería mostrar el modal con el título "Completa tus datos en la web Pacífico"
    And como mensaje "Termina de ingresar los datos de tu vehículo en la web de Pacífico. También puedes validar si el número de placa es correcto."
    And como botones "Ir a la web Pacífico" y "Validar placa"
    And al presionar el botón "Ir a la web Pacífico" se debe ir a la webview de Pacífico

    Examples:
      | codigo | personalityInicial           | placa |
      |    001 | psp_422_license_plate_format |       |
