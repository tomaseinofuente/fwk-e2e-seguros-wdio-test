Feature: Pruebas happy con mocks para cancelar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Cancelacion][ModificarDatos][Happy] :: Cancelar seguros SOAT y presionar el botón modificar datos y regresar
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton SOAT
    And el usuario visualiza la sección "SOAT comprados:"
    And se selecciona un SOAT <estadoSOAT>
    And se muestra el resumen de compra
    And en el resumen de compra se debe visualizar la sección "Con el respaldo de"
    And en el resumen de compra se debe visualizar la sección "Datos del vehículo" con los datos
      | Placa:       |
      | Modelo:      |
      | Uso:         |
      | Circulación: |
    And en el resumen de compra <mostrar> se debe visualizar la opción "¿Necesitas modificar los datos?"
    And se preciona la opción "¿Necesitas modificar los datos?"
    And se muestra la pantalla "Modificar datos" de cancelación de SOAT
    And en la pantalla "Modificar datos" de cancelación de SOAT se muestra el título "Modificar datos"
    And en la pantalla "Modificar datos" de cancelación de SOAT se muestra la descripción "Para actualizar los datos, puedes hacerlo a través del call center de Pácifico Seguros."
    And en la pantalla "Modificar datos" de cancelación de SOAT se muestra los botones "Regresar" y "Solicitar asesoria"
    And en la pantalla "Modificar datos" de cancelación de SOAT se presiona el botón "Regresar"
    And se muestra el resumen de compra

    Examples:
      | codigo | estadoSOAT | mostrar |
      |    001 | Comprado   | Si      |
