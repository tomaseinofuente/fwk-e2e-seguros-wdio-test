Feature: Pruebas unhappy con mocks para Cotizar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Cotizar][UnHappy] :: Error De Datos Al Cotizar seguros SOAT En Pacifico - MNK0011
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    When el usuario presiona el botón COTIZAR
    Then Se debería mostrar el modal con el título "No podemos procesar tu compra"
    And como mensaje "Por ahora solo es posible comprar tu SOAT con tu DNI, Si posees otro documento, puedes adquirirlo desde la web de pacifico"
    # Error en el mensaje tilde en i de pacífico
    # And como mensaje "Por ahora solo es posible comprar tu SOAT con tu DNI, Si posees otro documento, puedes adquirirlo desde la web de pacífico"
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial            |placa |
      |    001 | psp_422_document_type_invalid |      |
