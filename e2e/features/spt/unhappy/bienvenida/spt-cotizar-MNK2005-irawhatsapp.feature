Feature: [002-bienvenida][unhappy][SPT] - Cotizar seguros SPT en Yape
  Está casuística se presenta cuando se presiona el botón continuar de la pantalla de bienvenida de SPT

  Scenario Outline: <codigo>-[SPT][Cotizar][UnHappy] :: Ya tienes este seguro con nosotros - MNK2005-IR A WHATSAPP
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    When el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    Then Se debería mostrar el modal con el título "Ya tienes este seguro con nosotros"
    And como mensaje "Si cancelaste tu seguro en BCP, tus datos se actualizarán en los próximos 7 días hábiles. Para consultas, comunícate a nuestro WhatsApp."
    And como botones "Ir al inicio" y "Ir a whatsapp"
    And al presionar el botón "Ir a whatsapp" se abre el aplicativo de whatsapp al chat "Yape Oficial"

    Examples:
      | codigo | personalityInicial             |
      |    001 | psp_422_policy_tenancy_present |
