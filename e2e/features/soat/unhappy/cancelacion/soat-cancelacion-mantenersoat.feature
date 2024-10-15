Feature: Pruebas happy con mocks para cancelar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Cancelacion][Winstate][Happy] :: Cancelar seguros SOAT e Ir al inicio
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
    And en el resumen de compra se debe visualizar la sección "Detalles de tu seguro" con los datos
      | Costo anual:       |
      | Fecha de compra:   |
      | Fecha de vigencia: |
      | Fin de vigencia:   |
    And en el resumen de compra se debe visualizar el tip informativo "Estas viendo los datos de la póliza que se emitió al momento de la compra"
    And en el resumen de compra se debe mostrar los botones "Cancelar seguro" y "Volver a comprar"
    And en el resumen de compra presionamos el botón "Cancelar seguro"
    And se debe mostrar la pantalla de "Confirmación de cancelación"
    And en la Confirmación de cancelación debe tener como título "Evita multas y mantente asegurado"
    And en la Confirmación de cancelación debe tener como descripción "Si cancelas tu SOAT quedarás expuesto a multas y desprotegido en caso de accidentes de tránsito."
    And en la Confirmación de cancelación debe mostrar los botones "Continuar cancelación" y "Mantener SOAT"
    And en la Confirmación de cancelación presionamos el botón "Mantener SOAT"
    And se muestra el resumen de compra

    Examples:
      | codigo | estadoSOAT | mostrar |
      |    001 | Comprado   | Si      |
