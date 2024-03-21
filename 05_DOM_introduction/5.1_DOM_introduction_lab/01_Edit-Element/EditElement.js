function editElement(element, match, replacer) {
    // This doesn't work in judge
    // element.textContent = element.textContent.replaceAll(match, replacer);
    
    
    // Solution without RegEx
    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }
    
    // Solution with RegEx
    // element.textContent = element.textContent.replace(new RegExp(match, 'g'), replacer);
    
}
