import React, { useState, useEffect } from "react";

export default function useAudio(url) {
	// create the audio first
	const [audio] = useState(new Audio(url));
	console.log(audio);

	// this is to upate whether it is currently playing or not
	const [, _forceUpdate] = useState(false);

	const forceUpdate = () => {
		_forceUpdate((prevState) => !prevState);
	};

	useEffect(() => {
		audio.play();
		audio.addEventListener("play", forceUpdate);
		audio.addEventListener("pause", forceUpdate);
		audio.addEventListener("ended", forceUpdate);
		audio.addEventListener("timeupdate", forceUpdate);

		return () => {
			audio.removeEventListener("play", forceUpdate);
			audio.removeEventListener("pause", forceUpdate);
			audio.removeEventListener("ended", forceUpdate);
			audio.removeEventListener("timeupdate", forceUpdate);
		};
	}, []);

	const play = () => audio.play();
	const pause = () => audio.pause();

	return [!audio.paused, play, pause];
}
