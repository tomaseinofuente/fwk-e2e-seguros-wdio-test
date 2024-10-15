Feature: [003-comprar][happy][SPT] - Comprar seguros SPT en Yape
  En este escenario probamos la navegabilidad de la pantalla al presionar el botón conoce más

  Scenario Outline: <codigo>-[SPT][Comprar][Nav][Happy] :: Presionar el botón conoce más visualizamos el webview de detalles del producto
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    When el usuario visualiza la pantalla de cotización y presiona el botón Conoce más
    # Then el usuario visualiza el webview de dinero más seguro

    Examples:
      | codigo | personalityInicial |
      |    001 | real_email         |
