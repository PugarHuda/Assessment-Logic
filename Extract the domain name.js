const url = "https://github.com/PugarHuda/Assessment-Logic.git";
let domain = (new URL(url));
domain = domain.hostname;
console.log(domain)