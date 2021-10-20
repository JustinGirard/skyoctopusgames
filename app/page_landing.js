
              
              
define(["jquery","components/content",], function($,content_module) {
    var module = {
        'dependencies':{
        }
    };
    module.create = function(data)
    {
        var instance ={};
        instance['header'] = data['header'];
        instance['sections'] = data['sections'];
        
        instance.head = function()
        {
            return `
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&family=Roboto&display=swap');
</style>
`;
        } 
        instance.id = function()
        {
            return "page_landing_gfudaa";
        } 
        instance.bind = function()
        {
            instance.sections.forEach(function (section)
            {
                if (section.bind != undefined)
                {
                    section.bind();
                }
            });
        } 
        instance.hide = function()
        {
            $(`#${instance.id()}`).fadeOut(10);
        } 
        
        instance.show = function()
        {
            $(`#${instance.id()}`).fadeIn(10);
        } 
        
        instance.render = function()
        {
            instance.header_html = "";
            if (instance.header != undefined && instance.header.render != undefined )
            {
                instance.header_html = instance.header.render()
            }
            var sections_html = "";
            if (instance.sections != undefined)
            {
                instance.sections.forEach(function (section)
                {
                    sections_html = sections_html + section.render();
                });
            }
              var html =`<div class="min-h-screen" id="${instance.id()}" style='display:none;' >
              <div class="relative overflow-hidden">
                ${instance.header_html}
                <main>
                ${sections_html}
                </main>
              </div>
            </div>`;
            return html;
        } 
        return instance;
    } 
    return module;
});