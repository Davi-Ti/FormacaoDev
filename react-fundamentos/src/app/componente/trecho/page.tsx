export default function Page() {
	// const titulo = <h1 className="text-red-500 text-6xl font-black">Título</h1>
	const trechos = [
		<div key="1">Trecho #1</div>,
		<div key="2">Trecho #2</div>,
		<div key="3">Trecho #3</div>,
	]

	return trechos[2]
}
