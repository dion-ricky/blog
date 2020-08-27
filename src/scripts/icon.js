
let changeIcon = (el, icon) => {
    el.innerHTML = icon;
    el.childNodes[0].style = "display: inline";
};

let fetchIcon = (icon) => {
    return new Promise((res, rej) => {
        let proto = window.location.protocol;
        let host = window.location.host;
        
        let iconPath = proto + '//' + host + '/' + icon;
    
        fetch(iconPath)
        .then(res => res.text())
        .then(data => {
            res(data);
        });
    
    });
};

module.exports = {
    changeIcon, fetchIcon
}