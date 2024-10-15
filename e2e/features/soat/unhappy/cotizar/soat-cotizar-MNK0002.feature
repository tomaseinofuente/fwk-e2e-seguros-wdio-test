Feature: Pruebas unhappy con mocks para Cotizar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Cotizar][UnHappy] :: Error De Datos Al Cotizar seguros SOAT En Pacifico - MNK0002
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    When el usuario presiona el botón COTIZAR
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos poniendo manos a la obra. Por favor, vuelve a intentarlo en unos minutos."
    And como botón "Cerrar"
    And al presionar el botón "Cerrar" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial   |placa |
      |    001 | psp_401_unauthorized |      |
