Feature: Pruebas happy con mocks para cancelar seguros SOAT en Yape

  Scenario Outline: <codigo>-[SOAT][Cancelacion][volver a comprar][Happy] :: Volver a comprar un SOAT <estadoSOAT>
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
    And en el resumen de compra se debe mostrar el botón "Volver a comprar"
    And en el resumen de compra no se debe mostrar el botón "Continuar cancelación"
    And en el resumen de compra si presionamos el botón "Volver a comprar"
    And establecemos el personality <personalitySecundario>
    And se muestra la cotización con los datos del vehículo
    And se acepta los terminos y condiciones y se presiona el botón CONTINUAR COMPRA POR
    When Se muestra la pantalla de verificación de OTP se ingresa el código OTP y se presiona el botón YAPEAR SOAT POR
    Then se visualiza el winstate de compra de SOAT
    And en el winstate presinamos el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | estadoSOAT | mostrar |
      |    001 | Cancelado  | No      |
      |    002 | Vencido    | No      |
