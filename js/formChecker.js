/**
 * formChecker check Required field on form and add red start with span tag
 * before this field or after. You can change all parameters.
 * @author Kevin FERRANDON
 * @version 1.0.0
 * @type Object
 */
class formChecker {
    constructor() {
        this.setRequiered();
    }
/**
 * Set text, html tag and color for html tag with required attribut on form
 * @param {string} text
 * @param {string} color
 * @param {string} tag
 * @returns 
 */
    setRequiered(text='*', color = '#ff0000;', tag='span') {
        this.sheet = document.createElement('style');
        this.sheet.innerHTML = ".required{ color: " + color + "}";
        document.body.appendChild(this.sheet);
        this.span = document.createElement(tag);
        this.span.textContent = text;
        this.span.setAttribute('class', 'required');
    }
    /**
     * Add node before or after input or select field 
     * @param {string} when
     * @returns 
     */
    addRequired(when='before') {
        var formsCollection = document.getElementsByTagName("form");
        for (var j = 0; j < formsCollection.length; j++)
        {
            this.elts = document.forms[j].querySelectorAll("[required]");
            for (var i = 0; i < this.elts.length; i++) {
                var span = this.span.cloneNode(true);
                if(when==='before'){
                    this.elts[i].before(span);
                }else{
                    this.elts[i].after(span);
                }
                
            }

        }
    }
}

/**
 * Simple example to use formChecker library 
 * You can uncomment code to check feature.
 * @returns 
 */
window.onload = function () {
    var checker = new formChecker();
 //   checker.setRequiered(' * (required)', '#ffcccc', 'p');
    checker.addRequired();
 //   checker.addRequired('after');
    
    
    
}