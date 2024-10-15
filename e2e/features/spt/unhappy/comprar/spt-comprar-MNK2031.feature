Feature: [003-comprar][unhappy][SPT] - Compra de seguros SPT en Yape
Está casuística se presenta cuando se presiona el botón "comprar seguro" en la pantalla de seguro cotizado

  Scenario Outline: <codigo>-[SPT][Comprar][UnHappy] :: Error De Datos Al Confirmar la compra de Seguro En Pacifico - MNK2031
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    And el usuario visualiza la cotización del seguro
    And establecemos el personality <personalitySecundario>
    When el usuario presiona el botón comprar el seguro
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos trabajando para solucionarlo. Por favor, vuelve a intentarlo en unos minutos. Si el problema persiste, reinténtalo más tarde."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial | personalitySecundario              |
      |    001 | real_email         | psp_422_unprocessable_entity       |
      # |    002 | real_email         | psp_404_transaction_not_found      |
      # |    003 | real_email         | psp_422_payment_uid_format         |
      # |    004 | real_email         | psp_422_payment_uid_required       |
      # |    005 | real_email         | psp_422_status_required            |
      # |    006 | real_email         | psp_422_payment_method_required    |
      # |    007 | real_email         | psp_422_payment_method_inclusion   |
      # |    008 | real_email         | psp_422_status_approved            |
      # |    009 | real_email         | psp_422_document_type_required     |
      # |    010 | real_email         | psp_422_document_type_inclusion    |
      # |    011 | real_email         | psp_422_document_type_string       |
      # |    012 | real_email         | psp_422_document_number_format     |
      # |    013 | real_email         | psp_422_document_number_string     |
      # |    014 | real_email         | psp_422_sale_date_required         |
      # |    015 | real_email         | psp_422_sale_date_format           |
      # |    016 | real_email         | psp_422_account_type_inclusion     |
      # |    017 | real_email         | psp_422_account_type_required      |
      # |    018 | real_email         | psp_422_account_type_string        |
      # |    019 | real_email         | psp_422_account_number_format      |
      # |    020 | real_email         | psp_422_account_number_required    |
      # |    021 | real_email         | psp_422_account_number_string      |
      # |    022 | real_email         | psp_422_account_currency_inclusion |
      # |    023 | real_email         | psp_422_account_currency_required  |
      # |    024 | real_email         | psp_422_account_currency_string    |
      # |    025 | real_email         | psp_422_installment_paid_boolean   |
      # |    026 | real_email         | psp_422_sent_policy_email_required |
      # |    027 | real_email         | psp_422_sent_policy_email_boolean  |
      # |    028 | real_email         | psp_422_email_format               |
      # |    029 | real_email         | psp_422_email_required             |
      # |    030 | real_email         | psp_422_person_type_string         |
      # |    031 | real_email         | psp_422_person_type_inclusion      |
      # |    032 | real_email         | psp_422_person_type_required       |
      # |    033 | real_email         | psp_422_transaction_error          |
      # |    034 | real_email         | psp_429_request_limit              |
      # |    035 | real_email         | psp_422_document_number_required   |
