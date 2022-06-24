import "./app.css";
import React from "react";
import animalData from "../src/data/animal.json";

function App() {
	const handleClick = (url) => {
		const sound = new Audio(url);
		setTimeout(() => {
			sound.play();
		}, 50);
	};

	return (
		<section className="all">
			<h1 className="text-center text-5xl mt-5">
				What does animal sound like?
			</h1>

			<div className=" mt-10 mb-6 mx-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
				{animalData.map((animal, index) => {
					return (
						<div
							className="flex items-center justify-center my-9"
							key={animal.id}
						>
							<button onClick={() => handleClick(animal.sound)}>
								<div className="card2 bg-white w-64 h-80 rounded-md">
									<img
										src={`/images/${animal.image}`}
										alt=""
										className="object-cover w-full h-5/6 rounded-t-md"
									/>
									<div className="bot-card flex items-center justify-center m-1">
										<h2 className="text-3xl">{animal.name}</h2>
									</div>
								</div>
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default App;
