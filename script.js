fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => res.json())
	.then((data) => {
		let output = '<h3> Posts </h3>';
		data.forEach(function (user){
			output += `
			<ul>
				<li>ID: ${user.id}</li>
				<li>Title: ${user.title}</li>
				<li>Body: ${user.body}</li>
			</ul>
			`;
			document.getElementById('fetchOutput').innerHTML = output
		});
	})
	.then(data => console.log(data));