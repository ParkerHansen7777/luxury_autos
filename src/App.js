import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<a href="/">
			<img src="https://cdn.discordapp.com/attachments/934601346638811137/969044874055803000/la_logo_transp_2000x2000.png" width="125" height="125" alt=""/>
			<span className="LA_span">Luxury Autos Car Dealership</span>
		</a>
      </header>
	  <body className="Page">
		<table class="table table-striped">
			<thead class="table table-bordered table-dark">
				<tr>
					<th>Picture</th>
					<th>Make</th>
					<th>Model</th>
					<th>Seats</th>
					<th>Type</th>
					<th>Rental Price</th>
					<th>Purchase Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="img-container"><img className="picture" src="https://i.imgur.com/LjqxujF.png" alt="" /></td>
					<td><span>Mercedes</span></td>
					<td><span>AMG GT</span></td>
					<td><span>2 Seats</span></td>
					<td><span>Special Edition</span></td>
					<td><span>$4000 daily</span></td>
					<td><span>Contact Bofa at 415-8019 or come on down to Luxury Autos</span></td>
				</tr>
				<tr>
					<td className="img-container"><img className="picture" src="https://i.imgur.com/w1AwAWa.jpeg" alt="" /></td>
					<td><span>Bravado</span></td>
					<td><span>Gauntlet Classic</span></td>
					<td><span>2 Seats</span></td>
					<td><span>PDM</span></td>
					<td><span>$2000 daily</span></td>
					<td><span>Contact Bofa at 415-8019 or come on down to Luxury Autos</span></td>
				</tr>
				<tr>
					<td className="img-container"><img className="picture" src="https://i.imgur.com/JBNNQIB.jpeg" alt="" /></td>
					<td><span>BMW</span></td>
					<td><span>i8</span></td>
					<td><span>2 Seats</span></td>
					<td><span>Casino</span></td>
					<td><span>$4000 daily</span></td>
					<td><span>Contact Bofa at 415-8019 or come on down to Luxury Autos</span></td>
				</tr>
				<tr>
					<td className="img-container"><img className="picture" src="https://i.imgur.com/rxWLUiB.jpeg" alt="" /></td>
					<td><span>Ford</span></td>
					<td><span>Mustang Shelby GT500®</span></td>
					<td><span>2 Seats</span></td>
					<td><span>Casino</span></td>
					<td><span>$4000 daily</span></td>
					<td><span>Contact Bofa at 415-8019 or come on down to Luxury Autos</span></td>
				</tr>
				<tr>
					<td className="img-container"><img className="picture" src="https://i.imgur.com/zQRWq1z.jpeg" alt="" /></td>
					<td><span>Honda</span></td>
					<td><span>Civic Type-R</span></td>
					<td><span>4 Seats</span></td>
					<td><span>Casino</span></td>
					<td><span>$4000 daily</span></td>
					<td><span>Contact Bofa at 415-8019 or come on down to Luxury Autos</span></td>
				</tr>
			</tbody>
		</table>
	  </body>
	  <footer className="App-footer"><p>Luxury Autos®</p><span>Created by Pramado (© 2022)</span></footer>
    </div>
  );
}

export default App;
