$(document).ready(function () {
    let inputContent = $('#title');
    let onGoing = $('.onGoing');
    let listItem = $('#list-item');
    let listItemContent = $('#list-item .content');
    let toDoListNum = $('#toDoListNum');
    let circle = $('.onGoing img');

    let clickCount = 0;
    let i = 0;

    inputContent.keypress(function (e) {
        // console.log(e.keyCode);
        if (e.keyCode == 13) {
            if (inputContent.val() == '') {
                alert('请输入您的待办事项~');
                return;
            }

            let $div = $('<div class="list-item" id="list-item"></div>');
            $div.attr('id', 'listItem' + i);
            i = i + 1;

            $div.append('<li class="rect"></li>');
            $div.append('<input type="checkbox" name="" id="">');

            let content = $('<li class="content"></li>');
            content.html(inputContent.val());
            $div.append(content);
            $div.append('<img src="./images/circle.png" alt="">');

            $('.onGoing').append($div);
            inputContent.val('');
            clickCount += 1;
            toDoListNum.html(clickCount);

            // if (clickCount == 0) {
            //     // console.log(inputContent.val());
            //     listItem.css('display', 'block');
            //     listItemContent.html(inputContent.val());
            //     inputContent.val('');
            //     clickCount += 1;
            //     toDoListNum.html(clickCount);
            // } else {
            //     // 获取克隆对象
            //     cloneListItem = listItem.clone(true);
            //     // 修改克隆对象中第三个子元素的内容
            //     cloneListItem.children().eq(2).html(inputContent.val());
            //     // 把修改后的克隆对象追加到onGoing前面用prepend
            //     onGoing.prepend(cloneListItem);
            //     inputContent.val('');
            //     clickCount += 1;
            //     toDoListNum.html(clickCount);
            // }
        }
    })

    circle.on('click', function (e) {
        // console.log($(e.target).parent());
        $(e.target).parent().remove();
        clickCount -= 1;
        toDoListNum.html(clickCount);
    })
})

// 1.隐藏.list-item
// 2.第一次按回车键后把.list-item的display改为block
// 3.把.list-item .content改为输入框输入的内容 inputContent.val()
// 4.第二次按回车键后复制一个.list-item，再修改克隆元素中子元素content里面的内容
// 5.把修改后的克隆对象追加到onGoing前面
// 6.每次输入input后清空input里面的value
// 7.