Feature: [002-bienvenida][unhappy][SPT] - Cotizar seguros SPT en Yape
  Está casuística se presenta cuando se presiona el botón continuar de la pantalla de bienvenida de SPT

  Scenario Outline: <codigo>-[SPT][Cotizar][UnHappy] :: Error De Datos Al Cotizar Seguro En Pacifico - PGA2004
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    When el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos trabajando para solucionarlo. Por favor, vuelve a intentarlo en unos minutos. Si el problema persiste, reinténtalo más tarde."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial                                        |
      |    001 | psp_422_pacifico_seguros_name_requerid                    |
      # |    002 | psp_422_pacifico_seguros_name_not_allowed                 |
      # |    003 | psp_422_pacifico_seguros_last_name_requerid               |
      # |    004 | psp_422_pacifico_seguros_second_name_requerid             |
      # |    005 | psp_422_pacifico_seguros_second_name_not_allowed          |
      # |    006 | psp_422_pacifico_seguros_second_name_only_numbers         |
      # |    007 | psp_422_pacifico_seguros_document_dni_eight_lenght        |
      # |    008 | psp_422_pacifico_seguros_document_number_required         |
      # |    009 | psp_422_pacifico_seguros_birthdate_less                   |
      # |    010 | psp_422_pacifico_seguros_birthdate_not_future             |
      # |    011 | psp_422_pacifico_seguros_payment_frecuency                |
      # |    012 | psp_422_pacifico_seguros_required_payment_frecuency       |
      # |    013 | psp_422_pacifico_seguros_plan_code_invalid                |
      # |    014 | psp_422_pacifico_seguros_service_required                 |
      # |    015 | psp_422_pacifico_seguros_service_invalid                  |
      # |    016 | psp_422_pacifico_seguros_birthdate_legal_age              |
      # |    017 | psp_422_pacifico_seguros_document_number_invalid          |
      # |    018 | psp_422_pacifico_seguros_document_type_required           |
      # |    019 | psp_422_pacifico_seguros_plan_code_required               |
      # |    020 | psp_422_pacifico_seguros_birthdate_required               |
      # |    021 | psp_422_pacifico_seguros_birthdate_invalid                |
      # |    022 | psp_422_pacifico_seguros_document_type_invalid            |
      # |    023 | psp_422_pacifico_seguros_name_not_forty_characters        |
      # |    024 | psp_422_pacifico_seguros_last_name_not_forty_characters   |
      # |    025 | psp_422_pacifico_seguros_second_name_not_forty_characters |
