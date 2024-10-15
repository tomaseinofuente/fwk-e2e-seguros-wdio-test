Feature: [002-bienvenida][unhappy][SPT] - Cotizar seguros SPT en Yape
  Está casuística se presenta cuando se presiona el botón continuar de la pantalla de bienvenida de SPT

  Scenario Outline: <codigo>-[SPT][Cotizar][UnHappy] :: Error De Datos Al Cotizar Seguro En Pacifico - MNK2004
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
      | codigo | personalityInicial                         |
      |    001 | psp_422_name_required                      |
      # |    002 | psp_422_name_patron_invalid                |
      # |    003 | psp_422_name_should_be_string              |
      # |    004 | psp_422_name_length                        |
      # |    005 | psp_422_last_name_required                 |
      # |    006 | psp_422_last_name_patron_invalid           |
      # |    007 | psp_422_last_name_should_be_string         |
      # |    008 | psp_422_last_name_length                   |
      # |    009 | psp_422_second_last_name_required          |
      # |    010 | psp_422_second_last_name_patron_invalid    |
      # |    011 | psp_422_second_last_name_should_be_string  |
      # |    012 | psp_422_second_last_name_length            |
      # |    013 | psp_422_document_type_required             |
      # |    014 | psp_422_document_type_inclusion            |
      # |    015 | psp_422_document_type_should_be_string     |
      # |    016 | psp_422_document_number_required           |
      # |    017 | psp_422_document_number_dni_patron_invalid |
      # |    018 | psp_422_document_number_should_be_string   |
      # |    019 | psp_422_plan_code_required                 |
      # |    020 | psp_422_plan_code_inclusion                |
      # |    021 | psp_422_plan_code_should_be_string         |
      # |    022 | psp_422_birthdate_required                 |
      # |    023 | psp_422_birthdate_patron_invalid           |
      # |    024 | psp_422_birthdate_should_be_string         |
      # |    025 | psp_422_payment_frequency_required         |
      # |    026 | psp_422_payment_frequency_inclusion        |
      # |    027 | psp_422_payment_frequency_should_be_string |
      # |    028 | psp_422_request_payload_required           |
      # |    029 | psp_422_timeout_create                     |
