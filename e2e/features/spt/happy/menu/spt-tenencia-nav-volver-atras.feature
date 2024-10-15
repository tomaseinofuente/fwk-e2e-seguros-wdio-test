Feature: [001-menu][happy][SPT] - Tenencia de seguros SPT en Yape
  En este escenario probamos la navegabilidad de la pantalla al presionar el botón atras deberia mostrar el menu principal

  Scenario Outline: <codigo>-[SPT][Tenencia][Nav][Happy] :: Presionar el botón atras en el menú de seguros
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    When el usuario en la pantalla de mundo seguros presiona el botón <-
    Then Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial |
      |    001 | real_email         |
