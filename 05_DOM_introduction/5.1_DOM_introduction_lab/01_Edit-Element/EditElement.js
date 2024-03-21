function editElement(ref, match, replacer) {
    // This doesn't work in judge
    // ref.textContent = ref.textContent.replaceAll(match, replacer);
    
    
    // Solution without RegEx
    while (ref.textContent.includes(match)) {
        ref.textContent = ref.textContent.replace(match, replacer);
    }
    
    // Solution with RegEx
    // ref.textContent = ref.textContent.replace(new RegExp(match, 'g'), replacer);
    
}
