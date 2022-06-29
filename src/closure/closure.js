function greeting() {
    let username = 'Jorge';
    function displayUserName() {
        return `hello ${username}`;
    }
    return displayUserName;
}
const g = greeting();
console.log(g);
console.log(g());

