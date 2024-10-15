Feature: [003-comprar][happy][SPT] - Comprar seguros SPT en Yape
  En este escenario probamos la navegabilidad de la pantalla al presionar el botón politica de privacidad deberia mostrar el webview de los politica de privacidad del producto SPT

  Scenario Outline: <codigo>-[SPT][Comprar][Nav][Happy] :: Presionar el botón politica de privacidad en la pantalla de cotización de seguro SPT se muestra el webview de los politica de privacidad del producto SPT
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    When el usuario visualiza la pantalla de cotización de SPT y presiona el botón politica de privacidad
    # Then el usuario visualiza el webview de politica de privacidad de SPT

    Examples:
      | codigo | personalityInicial   |
      |    001 | real_email |
