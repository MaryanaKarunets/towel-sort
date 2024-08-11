module.exports = function towelSort(matrix) {
    if (matrix == [] || matrix == undefined) {
        return [];
    } else {
        let b = [];
        for (i = 0; i < matrix.length; i++) {
            if ((i % 2) == 0 || (i == 0)) {
                b.push(matrix[i]);
            } else {
                b.push(matrix[i].reverse());
            }
        }
        c = [];
        for (i = 0; i < b.length; i++) {
            c.push(...b[i]);
        }
        return c;
    }
}