Feature: [002-bienvenida][unhappy][SPT] - Cotizar seguros SPT en Yape
  Está casuística se presenta cuando se presiona el botón continuar de la pantalla de bienvenida de SPT

  @android
  Scenario Outline: <codigo>-[SPT][Cotizar][UnHappy] :: Error De Datos Al Cotizar Seguro En Pacifico - MNK0003
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    When el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos poniendo manos a la obra. Por favor, vuelve a intentarlo en unos minutos."
    And como botón "Entendido"
    And al presionar el botón "Entendido" se cierra el popup y se muestra la pantalla actual con los mismos datos

    Examples:
      | codigo | personalityInicial   |
      |    001 | psp_500_server_error |

  @ios
  Scenario Outline: <codigo>-[SPT][Cotizar][UnHappy] :: Error De Datos Al Cotizar Seguro En Pacifico - MNK0003
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    When el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos poniendo manos a la obra. Por favor, vuelve a intentarlo en unos minutos."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se cierra el popup y se muestra la pantalla actual con los mismos datos

    Examples:
      | codigo | personalityInicial   |
      |    001 | psp_500_server_error |
