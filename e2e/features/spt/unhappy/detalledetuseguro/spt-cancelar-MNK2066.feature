Feature: [004-cancelar][unhappy][SPT] - Cancelar tu seguros SPT en Yape
Está casuística se presenta cuando se presiona el botón "Cancelar seguro" en la pantalla de detalle de tu seguro

  Scenario Outline: <codigo>-[SPT][Cancelar][UnHappy] :: Error De Datos Al Cancelar la compra de un Seguro En Pacifico - MNK2066
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de Detalles de tu seguro
    And el usuario presiona el botón Cancelar seguro
    And el usuario visualiza la pantalla de confirmación de cancelación SPT
    And el usuario presiona el botón confirmar cancelación SPT
    Then Se debería mostrar el modal con el título "Ocurrió un inconveniente"
    And como mensaje "Estamos trabajando para solucionarlo. Por favor, vuelve a intentarlo en unos minutos. Si el problema persiste, reinténtalo más tarde."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial                                       |
      |    001 | psp_200_flow_post_sale_psp_422_cancel_policy_id_required |
      # |    002 | psp_200_flow_post_sale_psp_422_cancel_policy_id_too_short             |
      # |    003 | psp_200_flow_post_sale_psp_422_cancel_policy_id_too_long              |
      # |    004 | psp_200_flow_post_sale_psp_422_cancel_reason_code_not_inclusion_list  |
      # |    005 | psp_200_flow_post_sale_psp_422_cancel_status_not_inclusion_list       |
      # |    006 | psp_200_flow_post_sale_psp_422_cancel_status_canceled                 |
      # |    007 | psp_200_flow_post_sale_psp_422_cancel_product_code_format             |
      # |    008 | psp_200_flow_post_sale_psp_422_cancel_product_code_required           |
      # |    009 | psp_200_flow_post_sale_psp_422_cancel_document_number_format          |
      # |    010 | psp_200_flow_post_sale_psp_422_cancel_document_number_required        |
      # |    011 | psp_200_flow_post_sale_psp_422_cancel_transition_information_required |
