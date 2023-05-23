import { create_icon } from './navigation_icon';
import { create_icon_left } from './navigation_icon_left';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { scene } from './client';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { create_info_icon_left } from './info_icon_left';
import { invoDivClean } from './info_div_clean';
import { teksty } from './teksty';
import { tytuly } from './tytuly'; 

//dodawanie panoramy
export const panorama1 = new panorama_form('./Enter.png').main;
panorama1.rotateY(Math.PI/2)

//dodawanie ikony nawigacyjnej
export const navicon1 = new create_icon_left(30, -15, 0,'nav1');
setTimeout(() => {
    panorama1.add(navicon1.main);
  }, 1000)

//event-click ikony nawigacyjnej
navicon1.element.addEventListener('pointerdown', () => {
    infoicon1.element.style.visibility='visible'
    panorama1.remove(navicon1.main)
    panorama1.remove(infoicon1.main)
    scene.remove(panorama1);
    scene.add(panorama2);
    panorama2.add(navicon2.main);
    panorama2.add(navicon3.main);
    navicon1.reset_size();
    //panorama2.add(infoicon2.main)
    //panorama2.add(infoicon3.main)
    infodiv1.main.style.visibility='hidden'
    
   

})

//dodawanie obrazka
const infodiv1 = new invoDivClean("120px",tytuly[0], teksty[0]);

//dodawanie ikony-obrazek
export const infoicon1 = new create_info_icon_left(30, 15, 0, 'imageInfo1')
setTimeout(() => {
  panorama1.add(infoicon1.main)
}, 1000)

//event-click ikony-obrazek
infoicon1.element.addEventListener('pointerdown', () => {
  console.log('pointer clicked'); 
  document.body.appendChild(infodiv1.main)
  infodiv1.main.style.visibility = 'visible';
  infoicon1.element.style.visibility = 'hidden';


  infodiv1.offButton.addEventListener("click", function () {

      infodiv1.main.style.visibility = 'hidden';
      infoicon1.element.style.visibility = 'visible';
  })

})



