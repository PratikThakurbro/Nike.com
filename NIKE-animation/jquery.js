$(document).ready(function() {
    $('.flower-img').hover(
        function() {
            // Mouse enter
            $('#flower-image').attr('src', 'imags/s3.avif'); // Change to your new image
        },
        function() {
            // Mouse leave
            $('#flower-image').attr('src', 'imags/sid-img.avif'); // Change back to original image
        }
    );
});

    // $(document).ready(function(){
    //     $('#load-more').click(function(event){
    //         event.preventDefault(); // Prevent the default action of the link
    //         $('.hidden-item').toggle(); // Toggle visibility of the hidden item
    //     });
    // });


