class Utils{

    public getCurrentDateTime() {
        const dateNow = new Date();
    
        const year = dateNow.getFullYear();
        const month = String(dateNow.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
        const day = String(dateNow.getDate()).padStart(2, '0');
        const hours = String(dateNow.getHours()).padStart(2, '0');
        const minutes = String(dateNow.getMinutes()).padStart(2, '0');
        // const seconds = String(dateNow.getSeconds()).padStart(2, '0');
    
        return `${year}${month}${day}${hours}${minutes}`;
    }
}
export default new Utils();