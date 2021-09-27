

$(window).on('load', function() {
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

})(jQuery);


function Iniciar() {
	Swal.fire({
        input: 'text',
        inputLabel: 'Seu nome',
        inputPlaceholder: 'Informe seu nome para registro...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirma',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Ok '+result.value+', Vamos continuar',
                showConfirmButton: false,
                timer: 1200
              }).then(()=>{
                window.location.href += "principal?nome="+result.value;
              })
        }
      })
}
