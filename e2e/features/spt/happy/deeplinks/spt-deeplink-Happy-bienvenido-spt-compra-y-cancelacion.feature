Feature: [000-deeplinks][happy][SPT] - Prueba con deeplink compra y cancelacion de seguros SPT en Yape

  Scenario Outline: <codigo>-[SPT][deeplink][Happy] :: redirigir a la pantalla de bienvenida de SPT con el deeplink y comprar seguro
    Given establecemos el personality <personalityInicial>
    When utilizamos el deeplink <deeplink>
    Then el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    And el usuario visualiza la cotización del seguro
    And el usuario presiona el botón comprar el seguro
    And el usuario debería visualizar el winstate con los datos del seguro SPT comprado y vuelve al menú principal
    And Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial | deeplink                   |
      |    001 | real_email         | yape://yape.com.pe/app/spt |

  Scenario Outline: <codigo>-[SPT][deeplink][Happy] :: redirigir a la pantalla de bienvenida de SPT con el deeplink y cancelar el seguro
    Given establecemos el personality <personalityInicial>
    When utilizamos el deeplink <deeplink>
    Then el usuario presiona el botón Cancelar seguro
    And el usuario visualiza la pantalla de confirmación de cancelación SPT
    And el usuario presiona el botón confirmar cancelación SPT
    And el usuario debería visualizar el winstate de cancelación del seguro SPT y vuelve al menú principal
    And Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial     | deeplink                   |
      |    001 | psp_200_flow_post_sale | yape://yape.com.pe/app/spt |
