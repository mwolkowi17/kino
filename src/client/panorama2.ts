import { create_icon } from './navigation_icon';
import { create_icon_left } from './navigation_icon_left';
import { scene } from './client';
import { panorama1, navicon1, infoicon1 } from './panorama1';
import { panorama3, navicon5 } from './panorama3';
import { panorama_form } from './panorama_create';
import { infoicon2, infodiv2 } from './panorama3';
import { create_info_icon } from './info_icon';
import { invoDiv } from './info_div';
import { invoDivClean } from './info_div_clean';
import { teksty } from './teksty';
import { tytuly } from './tytuly';
import { create_info_icon_left } from './info_icon_left';


//dodawanie panoramy
export const panorama2 = new panorama_form('./main1.png').main
panorama2.rotateY(-30*(Math.PI/180))
//dodawanie ikony nawigacyjnej
export const navicon2 = new create_icon_left(-30, -9, -16, 'nav2');
export const navicon3 = new create_icon_left(30, -17, 5, 'nav3');

//panorama2.add(navicon2.main);
//panorama2.add(navicon3.main);


//event-click ikony nawigacyjnej
navicon2.element.addEventListener('pointerdown', () => {
    console.log('navicon2')
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(infoicon2.main)
    scene.remove(panorama2);
    scene.add(panorama3);
    //panorama3.add(navicon4.main);
    panorama3.add(navicon5.main)
    panorama3.add(infoicon2.main)
    navicon2.reset_size();
    navicon3.reset_size();
    infodiv2.main.style.visibility='hidden'
})

//event-click ikony nawigacyjnej
navicon3.element.addEventListener('pointerdown', () => {
    console.log("navicon3")
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(infoicon2.main)
    scene.remove(panorama2);
    scene.add(panorama1);
    panorama1.add(navicon1.main)
    panorama1.add(infoicon1.main)
    navicon1.reset_size();
    infodiv2.main.style.visibility='hidden'
})


