Feature: Pruebas happy con mocks para Comprar seguros SOAT en Yape
En este escenario probamos la navegabilidad de la pantalla de compra al presionar el botón ¿necesitas modificar los datos? deberia mostrar el popup Modificar datos

  Scenario Outline: <codigo>-[SOAT][Comprar][Nav][Happy] :: Presionar el botón ¿necesitas modificar los datos? deberia mostrar el popup Modificar datos
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario ingresa la placa <placa>
    And el usuario presiona el botón COTIZAR
    And se muestra la cotización con los datos del vehículo
    When el usuario visualiza la pantalla de compra tu SOAT y presiona el botón Necesitas modificar los datos
    Then Se debería mostrar el popup Modificar datos

    Examples:
      | codigo | personalityInicial | placa |
      |    001 | real_email         |       |
