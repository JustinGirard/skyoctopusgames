requirejs.config({
    waitSeconds: 30,
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        paxdk: "//dev.paxfinancial.ai/paxfinancial/view/paxdk",
        doencode:"//dev.paxfinancial.ai/paxfinancial/view/doencode",
        jquery_ui:"//code.jquery.com/ui/1.12.1/jquery-ui",
        d3:"//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min",
        c3:"//cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min",
        zdog:'//unpkg.com/zdog@1/dist/zdog.dist.min'        
        
    }
});


require(['jquery','app/main','paxdk','doencode'], function($,app_main,pdk,doencode)
{
    app = app_main.create();
    $('head').append(app.head());
    $(document).ready(function()
    {            
        $('body').html(app.render());
        app.bind();
        $('body').fadeIn(200);
    });
});
