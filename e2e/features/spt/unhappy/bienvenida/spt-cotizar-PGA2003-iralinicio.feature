Feature: [002-bienvenida][unhappy][SPT] - Cotizar seguros SPT en Yape
  Está casuística se presenta cuando se presiona el botón continuar de la pantalla de bienvenida de SPT

  Scenario Outline: <codigo>-[SPT][Cotizar][UnHappy] :: Verificamos que ya has comprado un seguro de protección Yape o BCP - PGA2003-Ir al inicio
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    When el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    Then Se debería mostrar el modal con el título "Ya tienes un seguro con nosotros"
    And como mensaje "Verificamos que ya has comprado un seguro de protección Yape o BCP. Para consultas, comunícate a nuestro Whatsapp."
    And como botones "Ir al inicio" y "Ir a whatsapp"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial                               |
      |    001 | psp_422_pacifico_seguros_documber_number_tenancy |
