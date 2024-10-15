Feature: [005-winstate][happy][SPT] - Comprar seguros SPT en Yape
  En este escenario probamos la navegabilidad de la pantalla al presionar el botón cerrar deberia mostrar el menu principal

  Scenario Outline: <codigo>-[SPT][Comprar][Nav][Happy] :: Presionar el botón cerrar en la pantalla de cotización de seguro SPT
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    And el usuario visualiza la cotización del seguro
    When el usuario presiona el botón comprar el seguro
    And el usuario debería visualizar el winstate con los datos del seguro SPT comprado y vuelve al menú principal
    And Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial |
      |    001 | real_email         |

  Scenario Outline: <codigo>-[SPT][deeplink][Happy] :: redirigir a la pantalla de bienvenida de SPT con el deeplink y cancelar el seguro
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de Detalles de tu seguro
    Then el usuario presiona el botón Cancelar seguro
    And el usuario visualiza la pantalla de confirmación de cancelación SPT
    And el usuario presiona el botón confirmar cancelación SPT
    And el usuario debería visualizar el winstate de cancelación del seguro SPT y vuelve al menú principal
    And Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial     | deeplink                   |
      |    001 | psp_200_flow_post_sale | yape://yape.com.pe/app/spt |
