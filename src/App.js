import './App.css';
import CarsList from './components/cars.component';
import NewCar from './components/new_car.component';
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
		<CarsList />
		<NewCar />
	  </body>
	  <footer className="App-footer"><p>Luxury Autos®</p><span>Created by Pramado (© 2022)</span></footer>
    </div>
  );
}

export default App;
