export class Constants {
  static BTN_CREAR_UNA_CUENTA: string = '//XCUIElementTypeStaticText[@name="Crear una cuenta"]';
  static BTN_YA_TENGO_UNA_CUENTA: string = '//XCUIElementTypeStaticText[@name="Ya tengo una cuenta"]';
  static TXT_CORREO_USUARIO: string = '//XCUIElementTypeStaticText[@name="Correo electrónico"]';
  static BTN_CONTINUAR: string = '(//XCUIElementTypeStaticText[@name="Continuar"])[1]';
  static LBL_INGRESAR_TU_CLAVE_YAPE: string = '~Ingresa tu clave Yape';
  static LBL_INGRESAR_TU_CLAVE_ALTERNO: string = '~Ingresa tu clave';
  static TXT_INGRESAR_OTP_PHONE: string = '(//XCUIElementTypeStaticText[@name="Código de validación"])[2]';
  static LNK_REENVIAR_CODIGO_PHONE: string = '//XCUIElementTypeButton[@name="Reenviar código"]';
  static LNK_PROQUE_NO_LLEGA_CODIGO_PHONE: string = '//XCUIElementTypeButton[@name="¿Por qué no me llega el código?"]';
  static BTN_VALIDAR_CODIGO_PHONE: string = "//XCUIElementTypeButton[@name='Validar código']";
  static TXT_INGRESAR_OTP_DISPOSITIVO: string = '~Código de validación';
  static LNK_REENVIAR_CODIGO_DISPOSITIVO: string = '~Reenviar código';
  static BTN_VALIDAR_CODIGO_DISPOSITIVO: string = "~Validar código";
  static BTN_DINERO_MAS_SEGURO: string = `//XCUIElementTypeStaticText[contains(@value, 'Dinero más')]`;
  static BTN_CONTINUAR_COTIZACION_SPT: string = `//XCUIElementTypeStaticText[@name="Continuar"]`;
  static BTN_CLOSE_RESULT_QUOTE_SPT: string = `~Cerrar`;
  static CHK_TERMINOS_Y_CONDICIONES_COMPRA_SPT: string = `~checkbox unchecked`;
  static BTN_BACK_CONFIRM_QUOTE: string = `~Atrás`;
  static BTN_CLOSE_CONFIRM_QUOTE: string = `~Cerrar`;
  static BTN_KNOW_MORE_CONFIRM_QUOTE: string = `//XCUIElementTypeButton[@name="Conoce más"]`;
  static BTN_COMPRA_SPT: string = `//XCUIElementTypeButton[@name="Comprar seguro"]`;
  static BTN_IR_INICIO_WINSTATE_SPT: string = `~Ir a inicio`;
  // static BTN_VER_MAS_MENU_PRINCIPAL: string = '//android.widget.TextView[@text="Ver más"]';
  static BTN_VER_MAS_MENU_PRINCIPAL: string = '~Ver más';
  static BTN_SEGUROS_MENU_PRINCIPAL: string = '~Seguros';
  static BTN_SOAT_MENU_PRINCIPAL: string = '~SOAT';
  static BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE: string = `//XCUIElementTypeButton[@name="ic close"]`;
  static BTN_CONOCER_MAS_BIENVENIDA_YAPE: string = '//XCUIElementTypeButton[@name="Conocer más"]';
  static TXT_TITULO_POPUP_OCURRIO_UN_INCONVENIENTE: string = '~Ocurrió un inconveniente';
  static TXT_MESSAGE_POPUP_ESTAMOS_TRABAJANDO_PARA_SOLUCIONARLO_REINTENTALO_MAS_TARDE: string = '~Estamos trabajando para solucionarlo. Por favor, vuelve a intentarlo en unos minutos. Si el problema persiste, reinténtalo más tarde.';
  static BTN_IR_AL_INICIO_POPUP: string = 'Ir al inicio';
  static BTN_CERRAR_POPUP: string = 'Cerrar';
  static BTN_CONTACTAR_CON_UN_ASESOR_POPUP: string = 'Contactar con un asesor';
  // Constantes de SOAT
  // Constantes Pantalla cotización
  static TXT_NRO_PLACA = "//XCUIElementTypeStaticText[@value=', ']";
  static BTN_COTIZAR = "//XCUIElementTypeButton[@name='Cotizar']";
  static LBL_SOATS_COMPRADOS = "~SOAT comprados:";
  static LIST_SOATS = "//XCUIElementTypeTable/XCUIElementTypeCell";
  // Constantes pantalla compra
  static CHK_TERMINOS_Y_CONDICIONES = '//XCUIElementTypeTextView[@value="He leído y aceptado los Términos y condiciones de SOAT, Envío del Certificado Electrónico y Política de Privacidad."]/following-sibling::*[1]';
  static BTN_CONTINUAR_COMPRA_POR = '//XCUIElementTypeButton[contains(@name, "Continuar compra por")]';
  static BTN_CERRAR_SCREEN_COMPRA = '~Cerrar';
  static BTN_ATRAS_SCREEN_COMPRA = '~Atrás';
  static BTN_NECESITAS_MODIFICAR_LOS_DATOS_COMPRA = '//XCUIElementTypeStaticText[@name="¿Necesitas modificar los datos?"]/following-sibling::XCUIElementTypeStaticText[1]';

  // Constantes pantalla OTP Compra
  static TXT_CODIGO_VALIDACION = '//XCUIElementTypeStaticText[@value=", "]';
  static BTN_YAPEAR_SOAT_POR = '//XCUIElementTypeButton[contains(@name, "Yapear Soat por")]';
  // yapeappotp_INAPP

  // Constantes Winstate
  static BTN_IR_AL_INICIO_WINSTATE_SOAT = '~Ir a inicio';

  // Constantes Resumen de compra
  static BTN_ATRAS_SCREEN_RESUMEN_COMPRA_SOAT = '~Atrás';
  static BTN_CERRAR_SCREEN_RESUMEN_COMPRA_SOAT = '~Cerrar';
  static BTN_NECESITAS_MODIFICAR_LOS_DATOS_RESUMEN_COMPRA_SOAT = '//XCUIElementTypeStaticText[@name="¿Necesitas modificar los datos?"]/following-sibling::XCUIElementTypeStaticText[1]';
  static BTN_VOLVER_A_COMPRAR_RESUMEN_COMPRA_SOAT = '//XCUIElementTypeButton[@name="Volver a comprar"]';

}