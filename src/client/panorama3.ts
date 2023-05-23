import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { panorama_form } from './panorama_create';

import { create_icon_left } from './navigation_icon_left';
import { invoDivClean } from './info_div_clean';
import { tytuly } from './tytuly';
import { teksty } from './teksty';
import { create_info_icon_left } from './info_icon_left';

//dodawanie panoramy
export const panorama3 = new panorama_form('./cinema1.png').main;
panorama3.rotateY(70*(Math.PI/180))

//dodawanie ikony nawigacyjnej
export const navicon5 = new create_icon_left(-30, -3, -4,'nav5');


//event-click ikony nawigacyjnej
navicon5.element.addEventListener('pointerdown', () => {
    infoicon2.element.style.visibility='visible'
    panorama3.remove(navicon5.main)
    panorama3.remove(infoicon2.main)
    scene.remove(panorama3);
    scene.add(panorama2);
    panorama2.add(navicon2.main);
    panorama2.add(navicon3.main);
    navicon5.reset_size();
    infodiv2.main.style.visibility='hidden'
  
    console.log('nav5')
})

//dodawanie obrazka
export const infodiv2 = new invoDivClean("220px",tytuly[1], teksty[1]);

//dodawanie ikony-obrazek
export const infoicon2 = new create_info_icon_left(30, -4, -12, 'imageInfo1')

//event-click ikony-obrazek
infoicon2.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked'); 
    document.body.appendChild(infodiv2.main)
    infodiv2.main.style.visibility = 'visible';
    infoicon2.element.style.visibility = 'hidden';
  
  
    infodiv2.offButton.addEventListener("click", function () {
  
        infodiv2.main.style.visibility = 'hidden';
        infoicon2.element.style.visibility = 'visible';
    })
  
  })
