const years = [1980, 1934, 2002, 2019];
const difYears = years.map(showDifYears);
console.log(difYears);

function showDifYears(element) {
    const now = new Date();
    return (now.getFullYear() - element);
}