table_creator(data.match);

function table_creator(dato) {
    ///////cabeza de tabla///////////
    let table = `
	<tr>
	<th>Teams</th>
	<th>Times</th>
	<th>Date</th>
	<th>Location</th>
	</tr>
    `;
    for (i = 0; i < dato.length; i++) {
        table += `
        <tr>
            <td>${dato[i].teams}</td>
            <td>${dato[i].times}</td>
            <td>${dato[i].date}</td>
            <td>${dato[i].location}</td>
        </tr>
        `;

    }
    document.getElementById('tab').innerHTML = table;
}




