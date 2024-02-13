function addTarget(target, url) {
    return url + "&target=" + target;
}

function addSublink(sublinkstr, url) {
    let newstr = sublinkstr.trim();//去除前后的空格
    newstr = newstr.replace(/\t/g, '');//去除全部制表符
    newstr = newstr.replace(/\r?\n/g, "|");//将换行符替换为“|”
    newstr = newstr.replace(/\s/g, '');//去除全部空格
    newstr = newstr.replace(/\|+/g, "|");//将连续的“|”替换为一个
    newstr = newstr.replace(/^\|+|\|+$/g, '');//去除尾部可能出现的“|”

    return url + "&url=" + encodeURIComponent(newstr);
}

function addConfig(config, url) {
    if (config == "") {
        return url;
    }
    return url + "&config=" + encodeURIComponent(config);
}

function addInclude(include, url) {
    if (include == "") {
        return url;
    }
    return url + "&include=" + encodeURIComponent(include);
}

function addExclude(exclude, url) {
    if (exclude == "") {
        return url;
    }
    return url + "&exclude=" + encodeURIComponent(exclude);
}

function addGroup(group, url) {
    group = group.trim();
    if (group == "") {
        return url;
    }
    return url + "&group=" + encodeURIComponent(group);
}

function addDev_id(dev_id, url) {
    dev_id = dev_id.trim();
    if (dev_id == "") {
        return url;
    }
    return url + "&dev_id=" + encodeURIComponent(dev_id);
}

function addFilename(filename, url) {
    filename = filename.trim();
    if (filename == "") {
        return url;
    }
    return url + "&filename=" + encodeURIComponent(filename);
}

function addInterval(interval, url) {
    if (interval == 0) {
        return url;
    }
    return url + "&interval=" + interval;
}

function addStrict(strict, url) {
    if (strict == false) {
        //设定一个默认值，选中结果与默认值相同则跳过，尽可能减少链接长度（下同）
        return url;
    }
    return url + "&strict=" + strict;
}

function addEmoji(emoji, url) {
    if (emoji == true) {
        return url;
    }
    return url + "&emoji=" + emoji
}

function addAdd_emoji(add_emoji, url) {
    if (add_emoji == true) {
        return url;
    }
    return url + "&add_emoji=" + add_emoji;
}

function addRemove_emoji(remove_emoji, url) {
    if (remove_emoji == true) {
        return url;
    }
    return url + "&remove_emoji=" + remove_emoji;
}

function addAppend_type(append_type, url) {
    if (append_type == false) {
        return url;
    }
    return url + "&append_type=" + append_type;
}

function addTfo(tfo, url) {
    if (tfo == false) {
        return url;
    }
    return url + "&tfo=" + tfo;
}

function addUdp(udp, url) {
    if (udp == false) {
        return url;
    }
    return url + "&udp=" + udp;
}

function addList(list, url) {
    if (list == false) {
        return url;
    }
    return url + "&list=" + list;
}

function addSort(sort, url) {
    if (sort == false) {
        return url;
    }
    return url + "&sort=" + sort;
}

function addScript(script, url) {
    if (script == false) {
        return url;
    }
    return url + "&script=" + script;
}

function addInsert(insert, url) {
    if (insert == true) {
        return url;
    }
    return url + "&insert=" + insert;
}

function addPrepend(prepend, url) {
    if (prepend == true) {
        return url;
    }
    return url + "&prepend=" + prepend;
}

function addScv(scv, url) {
    if (scv == false) {
        return url;
    }
    return url + "&scv=" + scv;
}

function addFdn(fdn, url) {
    if (fdn == true) {
        return url;
    }
    return url + "&fdn=" + fdn;
}

function addExpand(expand, url) {
    if (expand == true) {
        return url;
    }
    return url + "&expand=" + expand;
}

function addAppend_info(append_info, url) {
    if (append_info == true) {
        return url;
    }
    return url + "&append_info=" + append_info;
}

function addClassic(classic, url) {
    if (classic == false) {
        return url;
    }
    return url + "&classic=" + classic;
}

function addTls13(tls13, url) {
    if (tls13 == false) {
        return url;
    }
    return url + "&tls13=" + tls13;
}

function addNew_name(new_name, url) {
    if (new_name == true) {
        return url;
    }
    return url + "&new_name=" + new_name;
}

function makeSub() {
    localStorage.setItem('backendSelected', $("#backend").val());
    var newsub = "";
    newsub += $("#backend").val();
    newsub = addTarget($("#target").val(), newsub);
    newsub = addSublink($("#sublink").val(), newsub);
    newsub = addConfig($("#config").val(), newsub);
    newsub = addInclude($("#include").val(), newsub);
    newsub = addExclude($("#exclude").val(), newsub);
    newsub = addGroup($("#group").val(), newsub);
    newsub = addDev_id($("#dev_id").val(), newsub);
    newsub = addFilename($("#filename").val(), newsub);
    newsub = addInterval($("#interval").val(), newsub);
    newsub = addStrict($("#strict").is(':checked'), newsub);
    newsub = addEmoji($("#emoji").is(':checked'), newsub);
    newsub = addAdd_emoji($("#add_emoji").is(':checked'), newsub);
    newsub = addRemove_emoji($("#remove_emoji").is(':checked'), newsub);
    newsub = addAppend_type($("#append_type").is(':checked'), newsub);
    newsub = addTfo($("#tfo").is(':checked'), newsub);
    newsub = addUdp($("#udp").is(':checked'), newsub);
    newsub = addList($("#list").is(':checked'), newsub);
    newsub = addSort($("#sort").is(':checked'), newsub);
    newsub = addScript($("#script").is(':checked'), newsub);
    newsub = addInsert($("#insert").is(':checked'), newsub);
    newsub = addPrepend($("#prepend").is(':checked'), newsub);
    newsub = addFdn($("#fdn").is(':checked'), newsub);
    newsub = addExpand($("#expand").is(':checked'), newsub);
    newsub = addAppend_info($("#append_info").is(':checked'), newsub);
    newsub = addClassic($("#classic").is(':checked'), newsub);
    newsub = addTls13($("#tls13").is(':checked'), newsub);
    newsub = addNew_name($("#new_name").is(':checked'), newsub);
    newsub = newsub.replace(/\?&/, "?");
    //所有方法都会在字段开头加“&”，去除“?”后第一个“&”
    //比如 https://a.co/sub?&xxx=... 变为 https://a.co/sub?xxx=...
    return newsub;
}

function saveBackend(name, url) {
    //保存自定义后端到浏览器
    if (localStorage.getItem("backendList")) {
        // 存在自定义后端则追加数据
        var backendList = JSON.parse(localStorage.getItem("backendList"));
        var backend = {
            "name": name,
            "url": url
        }
        backendList.push(backend);
        localStorage.setItem("backendList", JSON.stringify(backendList));
    } else {
        // 不存在自定义后端则创建一个
        var backendList = [
            {
                "name": name,
                "url": url
            },
        ];
        localStorage.setItem("backendList", JSON.stringify(backendList));
    }
}

function install2(type,url) {
    if(type=="clash"){
        //导入到clash
        window.location = "clash://install-config?url=" + encodeURIComponent(url);
    }else if(type=="surge"){
        //导入到surge
        window.location = "surge:///install-config?url=" + encodeURIComponent(url);
    }else if(type=="shadowrocket"){
        //导入到Shadowrocket
        window.location = "shadowrocket://add/sub://"+btoa(url);
    }else if(type=="stash"){
        //导入到Stash
        window.location = "stash://install-config?url=" + encodeURIComponent(url);
    }else if(type=="quantumultx"){
        //导入到Quantumult X
        window.location = 'quantumult-x:///'+encodeURIComponent('update-configuration?remote-resource={"server_remote":["'+url+'"]}');
    }
}

function printAlert(type, text1) {
    let alert = '<div class="alert alert-' + type + '">' + text1 + '</div>'
    $("#alert").append(alert);
    $("#alert *").fadeOut(4000, function () {
        this.remove()
    });
}

function copyLink(text) {

    //复制链接方法 navigator.clipboard方法为较新的api标签有浏览器安全策略限制，非https环境下无法使用

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        return;
    }
    //navigator.clipboard不可用时采用document.execCommand('copy')方法，该方法已被弃用

    let textarea = $('<textarea style="display:none"></textarea>');
    textarea.text(text);
    $("body").append(textarea);
    textarea.select();
    //将文本放入文本域中，然后同过select()选中 再执行document.execCommand('copy')复制

    document.execCommand('copy');
    textarea.remove();
}

function showClientList() {
    //获取客户端数据并插入到对应下拉栏中
    for (let i = 0; i < client.length; i++) {
        let option = $("<option></option>");
        option.attr("value",client[i]["value"]);
        option.text(client[i]["name"]);
        $("#target").append(option);
    }
}

function showConfigList() {
    //获取远程配置数据并插入到对应下拉栏中
    for (let i = 0; i < allConfig.length; i++) {
        //i 为列表序号
        let configList = allConfig[i].configList;
        let optgroup = $("<optgroup></optgroup>")
        for (let j = 0; j < configList.length; j++) {
            //j 为列表内条目序号
            if (j == 0) {
                optgroup.attr("label",configList[0]["name"]);
                continue;
            }
            let option = $("<option></option>");
            option.attr("value",configList[j]["url"]);
            option.text(configList[j]["name"]);
            optgroup.append(option);
            
            if (j == configList.length - 1) {
                $("#config").append(optgroup);
            }
        }
    }
}

function showBackendList() {
    //获取后端数据并插入到的对应下拉栏中

    $("#backend").html("");
    //清空后端下拉栏

    for (let i = 0; i < backend.length; i++) {

        let option = $("<option></option>");
        option.attr("value",backend[i]["url"]);
        option.text(backend[i]["name"]);

        $("#backend").append(option);
        
    }
    if (localStorage.getItem("backendList")) {
        // 从浏览器数据中获取自定义后端数据并插入到下拉栏中
        var backendList = JSON.parse(localStorage.getItem("backendList"));
        for (let i = 0; i < backendList.length; i++) {
            let option = $("<option></option>");
            option.addClass("customBackend");
            option.attr("value",backendList[i]["url"]);
            option.text(backendList[i]["name"]);

            $("#backend").append(option);
        }
    }

    if (localStorage.getItem("backendSelected")) {
        //获取上次使用的后端并选中
        $("#backend").val(localStorage.getItem("backendSelected"));
    } else {
        // 上次没有使用过则默认选择第一个
        $("#backend").val(backend[0]["url"]);
    }
}

function showCustomBackend() {
    // 在自定义后端页面列出全部自定义后端
    $("#backendModalBody").html("");
    let html1='<div class="input-group mb-4" id="addBackendBlock"></div>';
    let html2='<input type="text" class="form-control" id="name" placeholder="名称"/>';
    let html3='<input type="text" class="form-control" id="url" placeholder="https://example.com/sub?"/>';
    let html4='<button class="btn btn-danger delbtn" id="del" type="button"><i class="bi bi-x-lg"></i></button>';

    if (localStorage.getItem("backendList")) {
        // 存在则插入到自定义后端弹窗中
        backendList = JSON.parse(localStorage.getItem("backendList"));
        if (backendList.length == 0) {
            //存在但是长度为0则插入一行空输入框
            addBlankBackend();
            return;
        }

        for (let i = 0; i < backendList.length; i++) {
            let div = $(html1);
            let input1 = $(html2);
            let input2 = $(html3);
            let button = $(html4);

            input1.attr("value", backendList[i]["name"]);
            input2.attr("value", backendList[i]["url"]);

            div.append(input1);
            div.append(input2);
            div.append(button);
            $("#backendModalBody").append(div);
        }
    } else {
        addBlankBackend();
    }
}

function addBlankBackend() {
    //在自定义后端弹窗中添加一行空白输入框
    let html1='<div class="input-group mb-4" id="addBackendBlock"></div>';
    let html2='<input type="text" class="form-control" id="name" placeholder="名称"/>';
    let html3='<input type="text" class="form-control" id="url" placeholder="https://example.com/sub?"/>';
    let html4='<button class="btn btn-danger delbtn" id="del" type="button"><i class="bi bi-x-lg"></i></button>';
    let div = $(html1);
    let input1 = $(html2);
    let input2 = $(html3);
    let button = $(html4);

    div.append(input1);
    div.append(input2);
    div.append(button);
    $("#backendModalBody").append(div);
}

function saveCustomBackend() {

    var backendList = [];

    var inputGroup = $("#backendModalBody").find("div");
    // 使用 .find() 方法查找父元素内的所有子div标签

    inputGroup.each(function () {
        var inputs = $(this).find("input"); //
        //使用 .find() 方法查找当前div标签内的所有input标签

        var name = inputs.eq(0).val();
        var url = inputs.eq(1).val();

        if (url == "") {
            return;
        }
        if (name == "") {
            name = url;
        }

        var obj = {
            "name": name,
            "url": url
        };

        // 将对象添加到数组中
        backendList.push(obj);
    });
    localStorage.setItem("backendList", JSON.stringify(backendList));
}

function delCustomBackend() {
    $('#backendModalBody').on('click', 'button', function () {
        // 找到被点击的按钮的父div
        var divToRemove = $(this).parent('div');

        // 删除被点击按钮的父div及其内容
        divToRemove.remove();
    });
}

function getShortURL(url, callback) {
    //获取短链接
    url = btoa(url);
    $.post(shortService[0]["url"], {
      longUrl: url,
      shortKey: shortService[0]["shortKey"]
    }, function (response) {
      callback(response["ShortUrl"]);
    });
}

function changeTheme(theme){
    //修改主题
    if(theme=="light"){
        $("#themeLight").addClass("active");
        $("#themeAuto").removeClass("active");
        $("#themeDark").removeClass("active");
        $("html").attr("data-bs-theme","light");
        localStorage.setItem("theme","light");
    }else if(theme=="dark"){
        $("#themeLight").removeClass("active");
        $("#themeDark").addClass("active");
        $("#themeAuto").removeClass("active");
        $("html").attr("data-bs-theme","dark");
        localStorage.setItem("theme","dark");
    }else{
        $("#themeLight").removeClass("active");
        $("#themeDark").removeClass("active");
        $("#themeAuto").addClass("active");
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            $("html").attr("data-bs-theme","dark");
        } else {
            $("html").attr("data-bs-theme","light");
        }
        localStorage.setItem("theme","auto");
    }
}