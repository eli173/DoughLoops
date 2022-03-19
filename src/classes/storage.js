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
				let lzs = LZString.compressToBase64(dString);
        let docURL = new URL(document.URL);
        docURL.hash = '#' + lzs;
        let newURL = docURL.href;
        document.location.href = newURL;

    }

    loadFromHash()
    {
        let dString = window.location.href.split('#')[1];
        if (dString && dString.length > 0)
        {
            try{
								let s = LZString.decompressFromBase64(dString)
                this.storageDict = JSON.parse(s);
            } 
            catch
            {
                alert("Invalid save data");
            }
        }
    }

}

export default Storage;
