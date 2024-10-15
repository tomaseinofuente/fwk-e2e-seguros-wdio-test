Feature: [003-comprar][unhappy][SPT] - Compra de seguros SPT en Yape
Está casuística se presenta cuando se presiona el botón "comprar seguro" en la pantalla de seguro cotizado

  Scenario Outline: <codigo>-[SPT][Comprar][UnHappy] :: Mensaje De Datos Al Confirmar la compra de Seguro En Pacifico - MNK2030-IR A WHATSAPP
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    And el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar
    And el usuario visualiza la cotización del seguro
    And establecemos el personality <personalitySecundario>
    When el usuario presiona el botón comprar el seguro
    Then Se debería mostrar el modal con el título "Ya tienes un seguro con nosotros"
    And como mensaje "Si cancelaste tu seguro en BCP, tus datos se actualizarán en los próximos 7 días hábiles. Para consultas, comunícate a nuestro WhatsApp."
    And como botones "Ir al inicio" y "Ir a whatsapp"
    And al presionar el botón "Ir a whatsapp" se abre el aplicativo de whatsapp al chat "Yape Oficial"

    Examples:
      | codigo | personalityInicial | personalitySecundario          |
      |    001 | real_email         | psp_422_policy_tenancy_present |
