Feature: [003-comprar][unhappy][SPT] - Compra de seguros SPT en Yape
Está casuística se presenta cuando se presiona el botón "comprar seguro" en la pantalla de seguro cotizado

  @android
  Scenario Outline: <codigo>-[SPT][Comprar][UnHappy] :: Error De Datos Al Confirmar la compra de Seguro En Pacifico - MNK0016
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    And el usuario visualiza la cotización del seguro
    And establecemos el personality <personalitySecundario>
    When el usuario presiona el botón comprar el seguro
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos poniendo manos a la obra. Por favor, vuelve a intentarlo en unos minutos."
    And como botón "Entendido"
    And al presionar el botón "Entendido" se cierra el popup y se muestra la pantalla actual con los mismos datos

    Examples:
      | codigo | personalityInicial | personalitySecundario               |
      |    001 | real_email         | psp_503_service_unavailable_approve |

  @ios
  Scenario Outline: <codigo>-[SPT][Comprar][UnHappy] :: Error De Datos Al Confirmar la compra de Seguro En Pacifico - MNK0016
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    And el usuario visualiza la cotización del seguro
    And establecemos el personality <personalitySecundario>
    When el usuario presiona el botón comprar el seguro
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos poniendo manos a la obra. Por favor, vuelve a intentarlo en unos minutos."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se cierra el popup y se muestra la pantalla actual con los mismos datos

    Examples:
      | codigo | personalityInicial | personalitySecundario               |
      |    001 | real_email         | psp_503_service_unavailable_approve |
