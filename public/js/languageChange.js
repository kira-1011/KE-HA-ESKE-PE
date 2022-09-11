// //change language on load
// function triggerHtmlEvent(element, eventName) {
//     var event;
    
//     if (document.createEvent) {
//       event = document.createEvent('HTMLEvents');
//       event.initEvent(eventName, true, true);
//       element.dispatchEvent(event);
//     } else {
//       event = document.createEventObject();
//       event.eventType = eventName;
//       element.fireEvent('on' + event.eventType, event);
//     }
// }

// window.onload = function ()
// {
//     if(localStorage.getItem('amhClicked') == 'true')
//     {
//         jQuery('.goog-te-combo').val('am');
//         window.location = "#googtrans(en|am)";
//     }
//     else
//     {
//         jQuery('.goog-te-combo').val('en');
//         window.location = "#googtrans(en|en)";
//     }

//     //reload page once
//     if(window.localStorage)
//     {
//         if(!localStorage.getItem('firstLoad'))
//         {
//             localStorage['firstLoad'] = true;
//             window.location.reload();
//         }  
//         else
//             localStorage.removeItem('firstLoad');
//     }
// }