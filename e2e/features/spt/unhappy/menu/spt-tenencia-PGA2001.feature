Feature: [001-menu][unhappy][SPT] - Tenencia de seguros SPT en Yape
Está casuística se presenta cuando se presiona el botón "Dinero más seguro" en el menú de mundo seguros

  Scenario Outline: <codigo>-[SPT][Tenencia][UnHappy] :: Error De Datos Al Consultar Tenencia De Seguro En Pacifico - PGA2001
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    When el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos trabajando para solucionarlo. Por favor, vuelve a intentarlo en unos minutos. Si el problema persiste, reinténtalo más tarde."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial                               |
      |    001 | psp_422_pacifico_seguros_documento_invalido      |
      # |    002 | psp_422_pacifico_seguros_patron_lenght_invalido  |
      # |    003 | psp_422_pacifico_seguros_tipo_documento_invalido |
