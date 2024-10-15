Feature: Pruebas unhappy con mocks para Cotizar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Cotizar][UnHappy] :: Error De Datos Al Cotizar seguros SOAT En Pacifico - MNK0010 - y presionar Contactar con un asesor
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    When el usuario presiona el botón COTIZAR
    Then Se debería mostrar el modal con el título "SOAT no disponible"
    And como mensaje "Actualmente, no podemos ofrecerte un SOAT. Para mayor información, comunícate con Pacífico."
    And como botones "Contactar con un asesor" y "Ir al inicio"
    And al presionar el botón "Contactar con un asesor" se abre el aplicativo de llamadas con el numero telefónico "01 5135000"

    Examples:
      | codigo | personalityInicial        |placa |
      |    001 | psp_422_client_black_list |      |
