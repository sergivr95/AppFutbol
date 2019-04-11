tablelocation(data.match);
function tablelocation(mapa) {

    ///////cabeza de tabla///////////
    let table = `
	<tr>
    <th>Location</th>
    <th>Map</th>
	</tr>
    `;
    for (i = 0; i < mapa.length; i++) {
        table += `
        <tr>
            <td>${mapa[i].location}</td>
            <td>
            <iframe
            src="${mapa[i].map}"
       width="70%" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
            </td>
        </tr>
        `;

    }
    document.getElementById('map').innerHTML = table;
}