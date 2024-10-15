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
    And en la Confirmación de cancelación presionamos el botón "Continuar cancelación"
    And se muestra la pantalla de validación de OTP de cancelación de SOAT
    And en la validación de OTP de cancelación de SOAT se debe autocompletar el código OTP
    And en la validación de OTP de cancelación de SOAT se muestra el botón "Confirmar solicitud"
    And en la validación de OTP de cancelación de SOAT se presiona el botón "Confirmar solicitud"
    And se muestra el winstate de cancelación de SOAT
    And en el winstate de cancelación de SOAT debe tener como título "Cancelación exitosa"
    And en el winstate de cancelación de SOAT debe tener como descripción "En breve te estaremos devolviendo el 100% del total cobrado por tu SOAT y podrás revisarlo en tus movimientos."
    And en el winstate de cancelación de SOAT se debe visualizar los datos
      | Fecha de compra:                                                                                                |
      | Fecha de cancelación:                                                                                           |
      | Total a devolver:                                                                                               |
      | Cod.Op.:                                                                                                        |
      | Dentro de 48 horas hábiles Pacífico Seguros te enviará la confirmación de la cancelación de tu SOAT a tu correo |
    And en el winstate de cancelación de SOAT debe mostrar los botones "Ir al inicio",  "Ir a cotizar" y "X"
    And en el winstate de cancelación de SOAT se presiona el botón "Ir al inicio"
    And se muestra el menú principal
    And en el menú principal se muestra la sección "Movimientos"
    And en la sección "Movimientos" se visualiza la devolución

    Examples:
      | codigo | estadoSOAT | mostrar | 
      |    001 | Comprado   | Si      | 
