Feature: [001-menu][unhappy][SPT] - Tenencia de seguros SPT en Yape
Está casuística se presenta cuando se presiona el botón "Dinero más seguro" en el menú de mundo seguros
y se intenta comprar otro dentro de los 30 primeros minutos despues de la compra, hasta que Pacífico generé el seguro
  Scenario Outline: <codigo>-[SPT][Tenencia][UnHappy] :: Error De Datos Al Consultar Tenencia De Seguro En Pacifico - PGA2002
    Given establecemos el personality <personalityInicial>
    And el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    When el usuario visualiza el menú de seguros y selecciona "Dinero más seguro"
    Then Se debería mostrar el modal con el título "Tu Yape ya tiene extra protección"
    And como mensaje "Vuelve más tarde para ver el detalle de tu producto Dinero más seguro. Mientras tanto, descubre qué más tiene Yape para ti."
    And como botón "Ir al inicio"
    And al presionar el botón "Ir al inicio" se debe volver al menú principal

    Examples:
      | codigo | personalityInicial           |
      |    001 | psp_422_issuance_in_progress |
