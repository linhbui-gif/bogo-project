let isotope = {
    init: function(id){
        this.run(id);
    },
    run: function(id){
    // init Isotope
    let $grid = $(id).isotope({
        transitionDuration: '0.8s',
        // layoutMode: 'fitRows',
    });

    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
        // filter functions
        let filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
                let number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function() {
                let name = $(this).find('.name').text();
                return name.match( /ium$/ );
            }
        };
        let filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('#filters').each( function( i, buttonGroup ) {
        let $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.active').removeClass('active');
        $( this ).addClass('active');
        });
    });
    }
}

isotope.init('.isotope');
