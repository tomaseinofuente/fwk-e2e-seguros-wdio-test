Feature: [003-comprar][unhappy][SPT] - Compra de seguros SPT en Yape
Está casuística se presenta cuando se presiona el botón "comprar seguro" en la pantalla de seguro cotizado

  Scenario Outline: <codigo>-[SPT][Comprar][UnHappy] :: Error De Datos Al Confirmar la compra de Seguro En Pacifico - PGA2011
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    And el usuario visualiza la cotización del seguro
    And establecemos el personality <personalitySecundario>
    When el usuario presiona el botón comprar el seguro
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos trabajando para solucionarlo. Por favor, vuelve a intentarlo en unos minutos. Si el problema persiste, reinténtalo más tarde."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial | personalitySecundario                            |
      |    001 | real_email         | psp_422_pacifico_invalid_savings_account_number  |
      # |    002 | real_email         | psp_422_pacifico_invalid_future_sale_date        |
      # |    003 | real_email         | psp_422_pacifico_invalid_checking_account_format |
      # |    004 | real_email         | psp_422_pacifico_credit_card_invalid_format      |
