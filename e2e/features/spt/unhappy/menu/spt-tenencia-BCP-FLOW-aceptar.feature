Feature: [001-menu][unhappy][SPT] - Tenencia de seguros SPT en Yape
Está casuística se presenta cuando se presiona el botón "Dinero más seguro" en el menú de mundo seguros

  Scenario Outline: <codigo>-[SPT][Tenencia][UnHappy] :: Usuario ya tiene activado un seguro con el BCP - Flow = BCP-ACEPTAR
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    When el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    Then Se debería mostrar el modal con el título "Ya tienes un seguro con el BCP"
    And como mensaje "Verificamos que ya haz comprado un seguro de protección. Si tienes consultas, comunícate al 01 311 9898 anexo 230 para asesorarte."
    And como botones "Aceptar" y "Llamar"
    And al presionar el botón "Aceptar" se cierra el popup y se muestra la pantalla actual con los mismos datos

    Examples:
      | codigo | personalityInicial                  |
      |    001 | psp_200_flow_bcp_one_policy_yearly  |
      # |    002 | psp_200_flow_bcp_many_policy_yearly |
      # |    003 | psp_200_flow_bcp_one_policy_monthly |
