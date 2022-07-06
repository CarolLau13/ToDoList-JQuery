$(document).ready(function () {
    let inputContent = $('#title');
    let onGoing = $('.onGoing');
    let listItem = $('#list-item');
    let listItemContent = $('#list-item .content');
    let toDoListNum = $('#toDoListNum');
    let doneListNum = $('#doneListNum');

    let clickCount = 0;
    let clickCount2 = 0;
    // let i = 0;
    // let j = 0;

    inputContent.keypress(function (e) {
        // console.log(e.keyCode);
        if (e.keyCode == 13) {
            if (inputContent.val() == '') {
                alert('请输入您的待办事项~');
                return;
            }

            let $div = $('<div class="list-item" id="list-item"></div>');
            // $div.attr('id', 'listItem' + i);
            // i = i + 1;

            $div.append('<li class="rect"></li>');

            let $checkbox = $('<input type="checkbox" name="" id="">');
            $div.append($checkbox);

            $content = $('<li class="content"></li>');
            $content.html(inputContent.val());
            $div.append($content);

            let $image = $('<img src="./images/circle.png" alt="">');
            // $image.attr('class', 'image' + i);
            $div.append($image);

            $('.onGoing').prepend($div);
            inputContent.val('');
            clickCount += 1;
            toDoListNum.html(clickCount);
            // 圆形删除键添加点击事件
            $image.on('click', function (e) {
                // console.log($(e.target));
                $(e.target).parent().remove();
                clickCount -= 1;
                toDoListNum.html(clickCount);
            })

            // checkbox添加点击事件
            $checkbox.on('click', function (e) {
                $(e.target).parent().remove();
                clickCount -= 1;
                toDoListNum.html(clickCount);

                let $divDone = $('<div class="list-item done-list-item" id="done-list-item">');

                $divDone.append('<li class="rect"></li>');

                let $checkbox2 = $('<input type="checkbox" name="" id="" checked>');
                $divDone.append($checkbox2);

                let $content = $('<li class="content"></li>');
                let contentChecked = $(e.target).next().html();
                $content.html(contentChecked);
                $divDone.append($content);

                let $image = $('<img src="./images/circle.png" alt="">');
                $divDone.append($image);

                $('.done').prepend($divDone);
                clickCount2 += 1;
                doneListNum.html(clickCount2);

                // 添加点击事件(删除done-list-item)
                $image.on('click', function (e) {
                    $(e.target).parent().remove();
                    clickCount2 -= 1;
                    doneListNum.html(clickCount2);
                })

                // 添加点击事件($checkbox2)
                $checkbox2.on('click', function (e) {
                    $(e.target).removeAttr('checked');
                    $(e.target).parent().remove();
                    clickCount2 -= 1;
                    doneListNum.html(clickCount2);

                    // 把待办事项放回list-item
                    clickCount += 1;
                    toDoListNum.html(clickCount);

                    let $div = $('<div class="list-item" id="list-item"></div>');

                    $div.append('<li class="rect"></li>');

                    let $checkbox = $('<input type="checkbox" name="" id="">');
                    $div.append($checkbox);

                    $content = $('<li class="content"></li>');
                    let contentUnchecked = $(e.target).next().html();
                    $content.html(contentUnchecked);
                    $div.append($content);

                    let $image = $('<img src="./images/circle.png" alt="">');
                    $div.append($image);

                    $('.onGoing').prepend($div);
                })
            })

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
})