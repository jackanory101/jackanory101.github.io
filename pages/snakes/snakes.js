let topZ = 1000;

/* ---------------- POSITION NOTES ---------------- */
function positionNotes() {
	const mainRect = document.getElementById("main").getBoundingClientRect();

	document.querySelectorAll(".note").forEach(note => {
		const id = note.dataset.for;
		const anchor = document.getElementById(id);

		if (!anchor) return;

		const rect = anchor.getBoundingClientRect();

		note.style.position = "absolute";
		note.style.top = `${rect.top - mainRect.top}px`;

		const rot = (Math.random() * 4 - 2).toFixed(2);
		note.style.setProperty("--rot", `${rot}deg`);
	});
}

/* ---------------- PHOTO ROTATION ---------------- */
document.querySelectorAll("#main .photo").forEach(photo => {
	const rot = (Math.random() * 8 - 4).toFixed(2);
	photo.style.setProperty("--rot", `${rot}deg`);
});

/* ---------------- INIT EVENTS ---------------- */
window.addEventListener("load", () => {
	positionNotes();

	/* sticky photos */
	document.querySelectorAll("#main .photo.sticky").forEach(photo => {

		const imgRot = (Math.random() * 6 - 3).toFixed(2);

		const tapeStyles = [
			"rgba(255,255,255,0.55)",
			"rgba(255,255,255,0.45)",
			"rgba(255,240,200,0.55)",
			"rgba(240,240,240,0.6)"
		];

		const tapeColor = tapeStyles[Math.floor(Math.random() * tapeStyles.length)];

		const tapeW = 60 + Math.random() * 25;
		const tapeH = 14 + Math.random() * 10;

		const rot1 = (-35 + Math.random() * 25).toFixed(2);
		const rot2 = (10 + Math.random() * 40).toFixed(2);

		const topOffset = (-12 + Math.random() * 6).toFixed(2);
		const sideOffset = (5 + Math.random() * 10).toFixed(2);

		photo.style.setProperty("--img-rot", `${imgRot}deg`);
		photo.style.setProperty("--tape-color", tapeColor);
		photo.style.setProperty("--tape-w", `${tapeW}px`);
		photo.style.setProperty("--tape-h", `${tapeH}px`);
		photo.style.setProperty("--tape-rot1", `${rot1}deg`);
		photo.style.setProperty("--tape-rot2", `${rot2}deg`);
		photo.style.setProperty("--tape-top", `${topOffset}px`);
		photo.style.setProperty("--tape-top2", `${topOffset}px`);
		photo.style.setProperty("--tape-left", `${sideOffset}px`);
		photo.style.setProperty("--tape-right", `${sideOffset}px`);
	});

	/* h1 tape */
	document.querySelectorAll("#main h1.tape").forEach(h1 => {

		const h1Rot = (Math.random() * 1.6 - 0.8).toFixed(2);

		const tapeColors = [
			"rgba(255,255,255,0.55)",
			"rgba(255,255,255,0.45)",
			"rgba(255,240,200,0.55)",
			"rgba(245,245,245,0.6)"
		];

		const tapeColor = tapeColors[Math.floor(Math.random() * tapeColors.length)];

		const w = 55 + Math.random() * 20;
		const h = 14 + Math.random() * 8;

		const rot1 = (-25 + Math.random() * 15).toFixed(2);
		const rot2 = (10 + Math.random() * 20).toFixed(2);

		const offset = (-12 + Math.random() * 8).toFixed(2);

		h1.style.setProperty("--h1-rot", `${h1Rot}deg`);
		h1.style.setProperty("--tape-color", tapeColor);
		h1.style.setProperty("--tape-w", `${w}px`);
		h1.style.setProperty("--tape-h", `${h}px`);
		h1.style.setProperty("--tape-rot1", `${rot1}deg`);
		h1.style.setProperty("--tape-rot2", `${rot2}deg`);
		h1.style.setProperty("--tape-top", `${offset}px`);
		h1.style.setProperty("--tape-bottom", `${offset}px`);
		h1.style.setProperty("--tape-left", `${offset}px`);
		h1.style.setProperty("--tape-right", `${offset}px`);
	});

	/* ---------------- NOTES STYLING ---------------- */
	document.querySelectorAll(".note").forEach(note => {

		const rot = (Math.random() * 4 - 2).toFixed(2);

		const backgrounds = [
			"rgba(255, 250, 210, 0.90)",
			"rgba(255, 255, 235, 0.90)",
			"rgba(250, 245, 220, 0.90)",
			"rgba(255, 240, 200, 0.90)"
		];

		const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

		const tapeColors = [
			"rgba(255,255,255,0.45)",
			"rgba(255,255,255,0.35)",
			"rgba(255,240,200,0.5)"
		];

		const tapeColor = tapeColors[Math.floor(Math.random() * tapeColors.length)];

		const tapeRot = (Math.random() * 20 - 20).toFixed(2);
		const tapeW = 30 + Math.random() * 25;
		const tapeH = 8 + Math.random() * 6;

		const tapeLeft = 8 + Math.random() * 20;
		const tapeTop = (-10 + Math.random() * 8).toFixed(2);

		note.style.setProperty("--rot", `${rot}deg`);
		note.style.setProperty("--note-bg", bg);
		note.style.setProperty("--tape-color", tapeColor);
		note.style.setProperty("--tape-rot", `${tapeRot}deg`);
		note.style.setProperty("--tape-w", `${tapeW}px`);
		note.style.setProperty("--tape-h", `${tapeH}px`);
		note.style.setProperty("--tape-left", `${tapeLeft}px`);
		note.style.setProperty("--tape-top", `${tapeTop}px`);
	});

	/* ---------------- CLICK → BRING TO FRONT ---------------- */
	document.addEventListener("click", (e) => {
		const note = e.target.closest(".note");
		if (!note) return;

		// bring to front
		note.style.zIndex = ++topZ;

		// lift effect (keep rotation)
		const rot = getComputedStyle(note).getPropertyValue("--rot");
		note.style.transform = `translateY(-2px) rotate(${rot})`;

		console.log("Clicked note:", note);
	});
});

/* ---------------- RESIZE ---------------- */
window.addEventListener("resize", positionNotes);
