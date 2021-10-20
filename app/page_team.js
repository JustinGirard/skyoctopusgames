
              
              
define(["jquery","components/content"], function($,content_module) {
    var module = {
        'dependencies':{
        }
    };
    module.create = function(data)
    {
        var instance ={};
        
        instance['header'] = data['header']
        instance['people'] = data['people']
        
        instance.head = function()
        {
            return "";
        } 
        instance.id = function()
        {
            return "page_people_gfudaa";
        } 
        instance.bind = function()
        {
            //
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
            
            
            instance.list_items = ""
            /*
            instance.people.forEach(function(person){
                var image_html = "";
                if (person.image != undefined && person.image.length != 0)
                    image_html = `<img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="${person.image}" alt="">`
                    
                instance.list_items += `<li>
                              <div class="space-y-4">
                                ${image_html}
                                <div class="space-y-2">
                                  <div class="text-xs font-medium lg:text-sm">
                                    <h3 class="text-gray-300">${person.name}</h3>
                                    <p class="text-indigo-600">${person.role}</p>
                                  </div>
                                </div>
                              </div>
                            </li>`;
                        });
                      <ul role="list" class="flex space-x-5">
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Twitter</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">LinkedIn</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                        
            */
            var people_html = '';
            instance.people.forEach(function(person)
            {
                var image_html = "";
                if (person.image != undefined && person.image.length != 0)
                    image_html =`<div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4"><img class="object-cover shadow-lg rounded-lg" src="${person.image}" alt=""></div>`;
                person.full_name = person.first_name + " " + person.last_name;
                var person_html = `<li class="sm:py-8">
                <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    ${image_html}
                  <div class="sm:col-span-2">
                    <div class="space-y-4">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3 class='text-white' >${person.full_name}</h3>
                        <p class="text-indigo-600">${person.title}</p>
                      </div>
                      <div class="text-lg">
                        <p class="text-gray-500">${person.about}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>`;                
              people_html = people_html +person_html;
            }); 

              var html = `<div id="${instance.id()}" style='display:none;' class="bg-gray-900">
                ${instance.header_html}
                  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                      <div class="space-y-5 sm:space-y-4">
                        <h2 class="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">About Pax Financial</h2>
                        <p class="text-xl text-gray-500">We take ownership of the zero to one problem. Many times projects fail without the right template systems, and without the ability to scale baked into their projects. Pax Financial began in as a traditional web development firm in 2014. After launching dozens of sites up to 2017, we honed in on expertise in logistics and finance, examples of multi-agent technology. We realized one of the largest pain points teams face is the development of projects that can serve millions of users. We get teams unstuck when they are trying to scale, and we set off new projects on the right path.</p>
                      </div>
                      <div class="lg:col-span-2">
                        <ul role="list" class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                        ${people_html}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>`;
            return html;
        } 
        return instance;
    } 
    return module;
});