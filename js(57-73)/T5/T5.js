function createSelectBox(startYear, endYear) {

    document.write(`<label for="years">Years</label><br>`);
    document.write(`<select name="years" id="years">`)
    for(startYear;startYear<=endYear;startYear++){
        document.write(`<option value="${startYear}">${startYear}</option>`)
    }
    document.write(`</select>`)
    // Your Code Here
}
createSelectBox(2000, 2021);