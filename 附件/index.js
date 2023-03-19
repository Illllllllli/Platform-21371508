window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search()
    })
    //设置键盘监听
    window.onkeydown=function (e){
        if(document.activeElement===document.getElementById('search-input').children[0]) {//判断active元素是否为输入框
            if (e.key === 'Enter'&&(!e.altKey)&&(!e.ctrlKey)&&(!e.shiftKey)) {//判断键盘输入
                search()
            }
        }
    }
    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener("click", clickLogin);

    //更改top-left链接类名
    let adds=document.getElementById('top-left').querySelectorAll('a')//选中所有a子元素
    adds.forEach((add)=>{
        let str = add.getAttribute("href")//获取href属性
        if (str.match(/https.*/))add.classList.add('https')
        else add.classList.add('http')
        console.log(str)
    })
}

function search() {
    // TODO: 搜索触发后的行为
    let str=document.getElementById('search-input').children[0].value;
    alert(str===''?"请输入搜索内容":str)
    window.location.href=`https://www.baidu.com/baidu?tn=monline_3_dg&ie=utf-8&wd=${str}`
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName()
    let temp=document.createElement("div")
    temp.innerHTML=username
    username=temp.innerText||temp.textContent
    temp = null
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"> ${username} </span>
                    </div>`;
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}