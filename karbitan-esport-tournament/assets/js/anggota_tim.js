no = 1;
count = 1;
$(document).ready(function () {

	$("#btnTambahAnggota").on('click', function () {

		if (no > 6) {
			alert("anggota tidak boleh lebih dari 6")
		} else {

			$("#anggota").append(`
				<div class="container-box my-4 " id="agt${no}">
					<div class="d-flex" style="justify-content: space-between;">
		<div class="box"><h2>Anggota #${no}</h2></div>
		<div class="box"><button type="button" class="close"  onclick="closeCard(${no})">
         			 <span aria-hidden="true">×</span>
       				 </button></div>
	</div>
					
					
				<div class="box-input d-flex"  >
					<div class="box">
						<label for="nama">Nama</label>
						<input type="text" name="nama_anggota${no}">
					</div>
					<div class="box">
						<label for="email">Email</label>
						<input type="text" name="email_anggota${no}">
					</div>
					<div class="box">
						<label for="">Discard</label>
						<input type="text" name="discard_anggota${no}">
					</div>
					<div class="box">
						<label for="">No. Telp</label>
						<input type="text" name="no_tlp_anggota${no}">
					</div>
					<div class="box">
						<label for="">ID</label>
						<input type="text" name="id_anggota${no}">
					</div>
					<div class="box">
						<label for="">Username</label>
						<input type="text" name="username_anggota${no}">
					</div>
					
					</div>
					
				
				</div>`)
			no += 1;


		}


	});

	$("#previewImg").on('click', function (event) {


	});

	$("#btnTambahManager").on("click", function () {

		if (count > 1) {
			alert("manager tidak boleh lebih dari 1")
		} else {
			count += 1;
			$("#manager").append(`<div class="parent-cont">
				<div class="container-box"style="position : relative; margin-bottom : 24px;" id="conMan${count}">
				
				<div class="box-input manager d-flex" >
					<div class="box btn-close">
					<button type="button" class="close"  onclick="closeManager(${count})">
         			<span aria-hidden="true" style="font-size: 25px; color: black">×</span>
       				 </button></div>
					<div class="box">

						<label for="nama">Nama</label>
						<input type="text" name="nama_manajer${count}" class="mbi">
					</div>
					
					<div class="box">
						<label for="">Tempat, Tanggal Lahir</label>
						<input type="text" class="mbi" name="tanggal_manajer${count}">
					</div>
				
					<div class="box d-flex" style="align-items: center; justify-content: center; height: 50px; ">
						<input type="checkbox" class="cbox-input">
						<label class="cbox-label" style="vertical-align: middle; margin: 0 !important; font-size: 15px; font-weight : normal;
						padding-left: 15px;">Lorem ipsum dolor sit amet consetetur.</label>
					</div>
					
					</div>
					
					
				</div>
					
				</div>`)
		}

	})

});

function closeManager(num) {

	$('#conMan' + num).remove()
	count -= 1;
}

function closeCard(num) {

	$('#agt' + num).remove()
	no -= 1;
}

function getImagePreview(event) {
	$("#inpLogo").css('display', 'none');
	var imageDiv = $("#previewImg");
	imageDiv.css('display', 'block');
	var image = URL.createObjectURL(event.target.files[0])

	$("#gambar1").attr('src', image);


}