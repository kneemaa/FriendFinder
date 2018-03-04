
$(document).on("click","#submit", event => {
	event.preventDefault();
	let name = !!$("#name").val() ? $("#name").val() : "Rick Astley" ;
	let photo = !!$("#photo").val() ? $("#photo").val() : "http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/04/2014RickAstley_Getty109255193201014-1.jpg";
	const makeFriend = {
		name: name,
		photo: photo,
		scores: [
			$("#q1").val(),
			$("#q2").val(),
			$("#q3").val(),
			$("#q4").val(),
			$("#q5").val(),
			$("#q6").val(),
			$("#q7").val(),
			$("#q8").val(),
			$("#q9").val(),
			$("#q10").val(),
		]
	}

	const currentURL = window.location.origin;

	$.post(currentURL + "/api/friends", makeFriend, (data) => {
		$("#friend-fullName").html(data.name);
		$("#friend-image").attr("src", data.photo);
		$("#friend-image").attr("alt", data.name);
		$("#friend-modal").modal();
	})
});