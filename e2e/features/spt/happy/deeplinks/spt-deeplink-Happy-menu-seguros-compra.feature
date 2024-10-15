Feature: [000-deeplinks][happy][SPT] - Prueba con deeplink de seguros SPT en Yape

  Scenario Outline: <codigo>-[SPT][deeplink][Happy] :: redirigir a la pantalla de cotización de SPT con el deeplink
    Given establecemos el personality <personalityInicial>
    When utilizamos el deeplink <deeplink>
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    And el usuario visualiza la cotización del seguro
    And el usuario presiona el botón comprar el seguro
    And el usuario debería visualizar el winstate con los datos del seguro SPT comprado y vuelve al menú principal
    And Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial | deeplink                         |
      |    002 | real_email         | yape://yape.com.pe/app/insurance |
