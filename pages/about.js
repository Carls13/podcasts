export default class extends React.Component{
	render(){
		return(
		<div>
			<img src="/static/carlos.jpg" alt="Carlos"/>
			<h1>Creado por Carlos</h1>
			<p>The best of the besties</p>
		<style jsx>{`
			h1{
				text-align: center;
			}

			p {
				text-align: center;
			}

			img{
				max-width: 50%;
				display: block;
				margin: 0 auto;
			}
			`}
		</style>
		<style jsx global>
			{` 
				body{
					background: white;
					font-family: Arial;
				}		
			`}
		</style>
		</div>)
	}
}