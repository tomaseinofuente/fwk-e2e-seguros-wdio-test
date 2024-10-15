
import Chance from "chance";
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class RandomHelper {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    private chance = new Chance();
    // Método  para generar una placa aleatoria con formato AAA-1234
    public generateRandomPlate(): string {
        // Generar 6 letras aleatorias
        const plate = this.chance.string({ length: 6, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });

        // Combinar en formato de placa
        return `${plate}`;
    }

    public getPlate(plate: string): string {

        if (plate == "") {
            plate = this.generateRandomPlate();
        }
        return plate;
    }
}

export default new RandomHelper();