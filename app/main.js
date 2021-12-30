define(['jquery','require', 'components/content', 'components/section','components/section_split', 'components/mem_list', 'app/main_application_state', 'app/page_landing',
        'app/page_team','components/header_navlist','components/button','components/link','components/contact_simple','components/z-block'
       ],
function ($,require,content,section,section_split,mem_list,appstate,page_landing,page_team,header,button,link,contact_simple,z_section) 
{
    var module = {'dependencies':{}}; 
    
    module.create = function()
    {
        var instance = function (){};
        instance.all_sections = [];
        
        instance.init = function()
        {

            // Bind events
            instance.l_about = link.create({'label':"ABOUT", 'on_click':function(){alert(2)}})
            instance.l_contact = link.create({'label':"JOIN THE WAITLIST", 'on_click':function(){alert(1)}})
            instance.l_press = link.create({'label':"PRESS", 'on_click':function(){alert(1)}})
            instance.l_investors = link.create({'label':"INVESTORS", 'on_click':function(){alert(1)}})
            var right_links = [ instance.l_about,];
            
            var header_instance = header.create({  'left_items':'<div id="the_logo" > <img  src="./content/justin_logo.png" /></div><label  class="the_name font-medium text-white w-20 mt-4 ">SKY OCTOPUS GAMES</label>',
                                                'right_items':right_links,});
                        
            var button_wait = button.create({'label':'JOIN THE WAITLIST','on_click':function(){window.location = 'https://www.linkedin.com/in/justin-girard/';}});
            var button_log = button.create({'label':'LOGIN','on_click':function(){alert('hello')}});
            instance.button_wait = button_wait;
            // Bind events
            var sections_list = [];
            $.ajaxSetup({async:false});            
            $.get('content/main_section_01.json', function(s) 
            {
                instance.f_contact = contact_simple.create({'appstate':appstate, 'on_login':function (){}});
                //s['right_instance'] = section.create({'header_instance':s['right_instance'],'content_instance':contact});
                //s['right_instance'] = s['right_instance'] + "<div class='text-right '>"+button_wait.render()+"</div>";
                s['right_instance'] = s['right_instance'] + "<div class='text-right '>"+instance.f_contact.render()+"</div>";
                sections_list.push(section_split.create(s));
            
            });            
            $.get('content/main_section_02.json', function(s) { sections_list.push(section_split.create(s)); });            
            $.get('content/main_section_03.json', function(s) { sections_list.push(section_split.create(s)); }); 
            //////////////////////////
            //////////////////////////
            //////////////////////////
            var people = [];
            $.get('content/people.json', function(s) { people = s;  });
            $.ajaxSetup({async:true});            
            
            
            
            instance.p_landing = page_landing.create({'header':header_instance, 'sections':sections_list});
            instance.all_sections.push(instance.p_landing);
            instance.p_team = page_team.create({'header':header_instance,'people':people});
            instance.all_sections.push(instance.p_team);
            
            // Bind events
            /*
            instance.contrib.on_click = function (){instance.p_landing.hide();instance.p_team.show();};
            instance.home.on_click = function (){instance.p_team.hide();instance.p_landing.show();};*/
            
        }
        
        instance.head = function () {
            //        

            var html = `
            <script src="content/main_section_01.js" type="text/javascript" ></script>
            <link href="app/turk.css" rel="stylesheet">
<link rel="icon"  type="image/png"  href="content/justin_logo.png">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">`;
            instance.all_sections.forEach(function(item){ html += item.head(); });
            return html
        }
        
        instance.render = function () {
            var html = "";
            instance.all_sections.forEach(function(item){ html += item.render(); });
            return html
        }
        instance.bind = function () {
            //instance.sections_list.forEach(function(item){ item.bind(); });
            instance.p_landing.bind();
            instance.button_wait.bind();
            instance.f_contact.bind();
            //instance.home.bind();
            //instance.contrib.bind();
            
            instance.p_landing.show();
        }
        
        instance.init();
        return instance;
    } 
    
    
    return module;
});