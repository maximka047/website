a = prompt("Кто пришел?")
if (a == undefined){
    alert("Вход отменен")
} else if(a == "Админ"){
    b = prompt("Пароль")
    if (b == undefined){
        alert("Вход отменен")
    } else if (b == "Черный властелин"){
        alert("Добро пожаловать!")
    }else{
        alert("Пароль неверен")
    }
    }
else{
    alert("Я вас не знаю")
} 