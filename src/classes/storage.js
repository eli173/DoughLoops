class Storage {

    constructor(){
        this.storageDict = {};
    }

    setVal(keyID, keyVal)
    {
        this.storageDict[keyID] = keyVal;
    }

    getVal(keyID)
    {
        return this.storageDict[keyID];
    }

    saveToHash()
    {
        let dString = JSON.stringify(this.storageDict);
        let b64str = btoa(dString);
        let docURL = new URL(document.URL);
        docURL.hash = '#' + b64str;
        let newURL = docURL.href;
        document.location.href = newURL;

    }

    loadFromHash()
    {
        let dString = window.location.href.split('#')[1];
        if (dString && dString.length > 0)
        {
            try{
                this.storageDict = JSON.parse(atob(dString));
            } 
            catch
            {
                alert("Invalid save data");
            }
        }
    }

}

export default Storage;
