Feature: Pruebas happy con mocks para visualizar el historico de seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][cotizar][historico][Happy] :: Historico de seguros SOAT en estado <estadoSOAT> en color <color>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario visualiza la sección "SOAT comprados:"
    And en el resumen de compra, soat comprados se muestra placa y modelo
    And en el resumen de compra, soat comprados si el estado es <estadoSOAT> con formato <formatoFecha> y <color>

    Examples:
      | codigo | estadoSOAT | formatoFecha              | color |
      |    001 | Comprado   | [1-31] [mes.] [2000-2029] | gris  |
      |    002 | Cancelado  | [1-31] [mes.] [2000-2029] | rojo  |
      |    003 | Venció     | [1-31] [mes.] [2000-2029] | rojo  |
