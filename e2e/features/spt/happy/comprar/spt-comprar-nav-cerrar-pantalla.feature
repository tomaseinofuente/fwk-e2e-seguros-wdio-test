Feature: [003-comprar][happy][SPT] - Comprar seguros SPT en Yape
  En este escenario probamos la navegabilidad de la pantalla al presionar el botón cerrar deberia mostrar el menu principal

  Scenario Outline: <codigo>-[SPT][Comprar][Nav][Happy] :: Presionar el botón cerrar en la pantalla de cotización de seguro SPT
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    When el usuario visualiza la pantalla de cotización de SPT y presiona el botón X
    Then Se debería mostrar el menú principal de yape

    Examples:
      | codigo | personalityInicial |
      |    001 | real_email         |
