// SCROLLER CODE
const scroller = scrollama();
scroller
    .setup({
        step: '.scroll__text .step',
        container: '.scroll',
        graphic: '.scroll__graphic',
        offset: 0.5,
        debug: false
    })
    .onStepEnter(handleStepEnter);

    
function handleStepEnter(el, index, dir) {
    // if(el.index == 0 && el.direction == 'down') {
        // map.flyTo({
        //     center: seoul,
        //     zoom: 10
        // });
        // setTimeout(
        //     function() {
        //         $('.marker--seoul').fadeIn(1500);
        //     }, delay
        // );

    // } else if(el.index == 0 && el.direction == 'up') {
    //     map.flyTo({
    //         center: [127.7669, 35.9078],
    //         zoom: 6
    //     });

    //     setTimeout(
    //         function() {
    //             $('.marker--seoul').fadeOut(1500);
    //         }, delay
    //     );
    // } else if(el.index == 3 && el.direction == 'down') {
        // map.flyTo({
        //     center: gwangju,
        //     zoom: 10,
        //     speed: .4
        // });
    // }
}