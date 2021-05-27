$(document).pjax('a[href^="https://www.sayai.top/"]:not(a[target="_blank"], a[no-pjax])', {
            container: '#content',
            fragment: '#content',
            timeout: 8000
        }).on('pjax:send',function () {
                        $('#loading').removeClass('hide');
                    }).on('pjax:click', function() {

            window['Page'].doPJAXClickAction();
                        Pace.restart();
            
                        $('body,html').animate({scrollTop:0},100);
            

        }).on('pjax:complete', function() {
            window['Page'].doPJAXCompleteAction();
            if ($(".post-position").length > 0){
                window['Page'].doPJAXCompletePostAction();
            }
                                    $('#loading').addClass('hide');
            
                        

        })
