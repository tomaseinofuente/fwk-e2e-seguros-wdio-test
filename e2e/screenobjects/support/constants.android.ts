export class Constants {
  static BTN_CREAR_UNA_CUENTA: string = "~Crear una cuenta";
  static BTN_YA_TENGO_UNA_CUENTA: string = '//android.widget.Button[@content-desc="Ya tengo una cuenta"]';
  static TXT_CORREO_USUARIO: string = "//android.widget.EditText";
  static BTN_CONTINUAR: string = "~Continuar";
  static TXT_INGRESAR_OTP_PHONE: string = 'new UiSelector().className("android.widget.EditText")';
  static LNK_REENVIAR_CODIGO_PHONE: string = 'new UiSelector().text("REENVIAR CÓDIGO")';
  static LNK_PROQUE_NO_LLEGA_CODIGO_PHONE: string = 'new UiSelector().className("android.view.View").instance(7)';
  static BTN_VALIDAR_CODIGO_PHONE: string = "~Validar código";
  static TXT_INGRESAR_OTP_DISPOSITIVO: string = 'new UiSelector().className("android.widget.EditText")';
  static LNK_REENVIAR_CODIGO_DISPOSITIVO: string = 'new UiSelector().className("android.widget.Button").instance(0)';
  static BTN_VALIDAR_CODIGO_DISPOSITIVO: string = "~Validar código";
  static BTN_DINERO_MAS_SEGURO: string = `//android.widget.TextView[contains(@text,"Dinero más")]`;
  static BTN_CONTINUAR_COTIZACION_SPT: string = `~Continuar`;
  static CHK_TERMINOS_Y_CONDICIONES_COMPRA_SPT: string = `//android.widget.CheckBox`;
  static BTN_COMPRA_SPT: string = `~Comprar seguro`;
  static BTN_IR_INICIO_WINSTATE_SPT: string = `~Ir a inicio`;
  // Pantalla de ingresa tu clave
  static LBL_INGRESA_TU_CLAVE_YAPE: string = `//android.widget.TextView[@text="Ingresa tu clave Yape"]`;
  static LBL_INGRESA_TU_CLAVE: string = `//android.widget.TextView[@text="Ingresa tu clave"]`;
  // static BTN_VER_MAS_MENU_PRINCIPAL: string = '//android.widget.TextView[@text="Ver más"]';
  static BTN_VER_MAS_MENU_PRINCIPAL: string = 'new UiSelector().text("Ver más")';
  static BTN_SEGUROS_MENU_PRINCIPAL: string = 'new UiSelector().text("Seguros")';
  static BTN_SOAT_MENU_PRINCIPAL: string = 'new UiSelector().text("SOAT")';
  static BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE: string = `//*[@resource-id="buttonClose"]`;
  static BTN_CONOCER_MAS_BIENVENIDA_YAPE: string = 'new UiSelector().description("Conocer más")';
  // static TXT_TITULO_POPUP_OCURRIO_UN_INCONVENIENTE: string = '~Ocurrió un inconveniente';
  static TXT_MESSAGE_POPUP_ESTAMOS_TRABAJANDO_PARA_SOLUCIONARLO_REINTENTALO_MAS_TARDE: string = '~Estamos trabajando para solucionarlo. Por favor, vuelve a intentarlo en unos minutos. Si el problema persiste, reinténtalo más tarde.';
  static BTN_IR_AL_INICIO_POPUP: string = 'new UiSelector().text("IR AL INICIO")';
  
  //Constantes SOAT
  static TXT_NRO_PLACA_SOAT = "//android.widget.TextView[@text='Nro. de placa']/parent::android.view.View/parent::android.widget.EditText";
  static BTN_COTIZAR_SOAT = "~Cotizar";
  static CHK_COMPRAR_TERMINOS_Y_CONDICIONES_SOAT = "//android.widget.CheckBox";
  static BTN_COMPRAR_CONTINUAR_COMPRA_POR_SOAT = "//android.widget.Button[contains(@content-desc,'Continuar compra por')]";
  static TXT_OTP_CODIGO_DE_VALIDACION_SOAT = "//android.widget.TextView[@text='Código de validación']/ancestor::android.view.View/ancestor::android.widget.EditText";
  static BTN_OTP_REENVIAR_CODIGO_SOAT = "//android.widget.TextView[@text='REENVIAR CÓDIGO']";
  static BTN_OTP_YAPEAR_SOAT_POR_SOAT = "//android.widget.Button[contains(@content-desc,'Yapear soat por')]";
  
  //Constantes Cotizacion
  static LBL_MONTO_COTIZADO_SOAT = "//android.widget.TextView[@text='S/']/following-sibling::*[1]";
  // Constantes winstate SOAT
  static BTN_IR_INICIO_WINSTATE_SOAT: string = `~Ir a inicio`;
  // constantes compartenos tu ubicación
  static LBL_COMPARTIR_UBICACION_CU = "//android.widget.TextView[@text='Compártenos tu ubicación']";
  static BTN_ACTIVAR_UBICACION_CU = "~Activar ubicación";
  static BTN_MAS_TARDE_CU = "~Más tarde";

}